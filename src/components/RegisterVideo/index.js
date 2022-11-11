import React from "react";
import { StyledRegisterVideo } from "./styles";

function useForm() {
  const [values, setValues] = React.useState({ titulo: "Olá", url: "mundo" });
}

export default function RegisterVideo() {
  const formCadastro = useForm();
  const [formVisivel, setFormVisivel] = React.useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div>
            <button
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              X
            </button>
            <input
              placeholder="Título do vídeo"
              value={values.titulo}
              onChange={(evento) => {
                const value = evento.target.value;
                setValues({
                  ...values,
                  titulo: value,
                });
              }}
            />
            <input
              placeholder="URL"
              value={values.url}
              onChange={(evento) => {
                const value = evento.target.value;
                setValues({
                  ...values,
                  url: value,
                });
              }}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      ) : (
        false
      )}
    </StyledRegisterVideo>
  );
}
