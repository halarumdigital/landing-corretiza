import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // POST /api/leads - Criar lead no CRM
  app.post("/api/leads", async (req, res) => {
    try {
      const { name, email, phone, message, company } = req.body;

      // Validação básica
      if (!name) {
        return res.status(400).json({ error: "Nome é obrigatório" });
      }

      // Configurações do CRM a partir do .env
      const crmApiUrl = process.env.CRM_API_URL;
      const crmApiToken = process.env.CRM_API_TOKEN;
      const crmLeadSource = process.env.CRM_LEAD_SOURCE;
      const crmLeadStatus = process.env.CRM_LEAD_STATUS;
      const crmLeadAssigned = process.env.CRM_LEAD_ASSIGNED;

      if (!crmApiUrl || !crmApiToken) {
        console.error("CRM API URL ou Token não configurados");
        return res.status(500).json({ error: "Configuração do CRM incompleta" });
      }

      // Payload para o CRM Perfex
      const leadData = {
        source: crmLeadSource,
        status: crmLeadStatus,
        name: name,
        assigned: crmLeadAssigned,
        email: email || "",
        phonenumber: phone || "",
        company: company || "",
        description: message || "",
      };

      // Enviar para o CRM (formato form-urlencoded)
      const formData = new URLSearchParams();
      Object.entries(leadData).forEach(([key, value]) => {
        if (value) formData.append(key, String(value));
      });

      const crmResponse = await fetch(crmApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "authtoken": crmApiToken,
        },
        body: formData.toString(),
      });

      const crmResult = await crmResponse.json();

      if (!crmResponse.ok) {
        console.error("Erro ao criar lead no CRM:", crmResult);
        return res.status(crmResponse.status).json({
          error: "Erro ao enviar para o CRM",
          details: crmResult
        });
      }

      console.log("Lead criado com sucesso no CRM:", crmResult);
      return res.status(201).json({
        success: true,
        message: "Lead criado com sucesso",
        data: crmResult
      });

    } catch (error) {
      console.error("Erro ao processar lead:", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  });

  return httpServer;
}
