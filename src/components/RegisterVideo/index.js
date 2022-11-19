import React from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from "@supabase/supabase-js";

function useForm() {
  const [values, setValues] = React.useState({ titulo: "Olá", url: "mundo" });
}

const PROJECT_URL = "https://otageduewyobcvqcrxxe.supabase.co";
const PROJECT_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im90YWdlZHVld3lvYmN2cWNyeHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzY3OTksImV4cCI6MTk4Mzc1Mjc5OX0.U1mWcn2uN6MI0aOa9SeNzhMrfyuX78I-I_9J-OwCV5Y";
const supabase = createClient(PROJECT_URL, PROJECT_KEY);

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
            supabase.from("video").insert({
              title: "",
              url: "",
              thumb: "",
              playlist:""
            });
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
