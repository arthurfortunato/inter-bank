import {
  Container,
  BodyContainer,
  InlineTitle,
  InlineContainer,
} from "./styles";

import { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Statement } from "./Statement";
import { PixCode } from "../../components/PixCode";

import { useAuth } from "../../hooks/useAuth";
import { pay, request } from "../../services/resources/pix";

import toast, { Toaster } from "react-hot-toast";

export const Dashboard = () => {
  const { user, getCurrentUser } = useAuth();
  const wallet = user?.wallet || 0;
  const [key, setKey] = useState("");
  const [generatedKey, setGeneratedKey] = useState("");
  const [newValue, setNewValue] = useState("");

  const handleNewPayment = async () => {
    const { data } = await request(Number(newValue));

    if (data.copyPasteKey) {
      setGeneratedKey(data.copyPasteKey);
    }
  };

  const handleReceivedPix = async () => {
    try {
      const { data } = await pay(key);

      if (data) {
        toast.success("Pix pago");

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }

      if (data.msg) {
        toast(data.msg);
        return;
      }
    } catch (error) {
      toast.error("Não é possivel receber PIX do mesmo usuário!");
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, [getCurrentUser]);

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Header />
      <BodyContainer>
        <div>
          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Saldo Atual</h2>
            </InlineTitle>
            <InlineContainer>
              <h3 className="wallet">
                {wallet.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
            </InlineContainer>
          </Card>

          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Receber PIX</h2>
            </InlineTitle>
            <InlineContainer>
              <Input
                type="number"
                step="0.01"
                style={{ flex: 1 }}
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                placeholder="0,00"
              />
              <Button onClick={handleNewPayment}>Gerar Codigo</Button>
            </InlineContainer>
            <PixCode code={generatedKey} />
          </Card>

          <Card noShadow width="90%">
            <InlineTitle>
              <h2 className="h2">Pagar PIX</h2>
            </InlineTitle>
            <InlineContainer>
              <Input
                style={{ flex: 1 }}
                value={key}
                onChange={(e) => setKey(e.target.value)}
                placeholder="Insira a chave"
              />
              <Button onClick={handleReceivedPix}>Pagar PIX</Button>
            </InlineContainer>
            <Toaster position="top-center" reverseOrder={false} />
          </Card>
        </div>
        <div>
          <Card noShadow width="90%" height="600px">
            <InlineTitle>
              <h2 className="h2">Extrato da Conta</h2>
            </InlineTitle>
            <Statement />
          </Card>
        </div>
      </BodyContainer>
    </Container>
  );
};
