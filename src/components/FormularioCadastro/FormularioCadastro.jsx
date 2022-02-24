import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });
  // const arr = useState("");
  // const sobrenome = arr[0];
  // const setSobrenome = arr[1];
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(aoEnviar);
        aoEnviar({ nome, sobrenome, cpf, promocoes, novidades });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const ehValido = validarCPF(event.target.value);
          setErros({ cpf: ehValido });
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            onChange={(event) => setPromocoes(event.target.checked)}
            name="promocoes"
            checked={promocoes}
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            onChange={(event) => setNovidades(event.target.checked)}
            checked={novidades}
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
