import { useForm } from 'react-hook-form'

function App() {

  const { register, handleSubmit, formState: {errors, touchedFields} } = useForm();

  /*
      Usamos a propriedade touchedFields para verificar se o campo foi tocado pelo usuário 
      e juntamente se não há erros no campo, assim mostramos a classe do campo-preenchido.
  */

  const handleSubmitForm = (data) => {
    console.log(data)
  }

  return (
      <main>
          <div className="copy">
              <h1>
                  FICOU COM DÚVIDA <br />
                  NOS MANDE UMA MENSAGEM!
              </h1>
              <p>
                  Caso tenha ficado com alguma duvida, basta nos mandar uma
                  mensagem e entraremos em contato em menos de 24h
              </p>
          </div>

          <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
              <label htmlFor="nome" />
              <input
                  type="text"
                  name="nome"
                  id="nome"
                  placeholder="Nome completo *"
                  className={`campo ${errors.nome ? "campo-obrigatorio" : ""} ${
                      touchedFields.nome && !errors.nome
                          ? "campo-preenchido"
                          : ""
                  }`}
                  {...register("nome", {
                      required: "Campo obrigatório",
                  })}
              />
              {errors.nome && <p>{errors.nome.message}</p>}

              <label htmlFor="email" />
              <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" Email *"
                  className={`campo ${
                      errors.email ? "campo-obrigatorio" : ""
                  } ${
                      touchedFields.email && !errors.email
                          ? "campo-preenchido"
                          : ""
                  }`}
                  {...register("email", {
                      required: "Campo obrigatório",
                  })}
              />
              {errors.email && <p>{errors.email.message}</p>}

              <label htmlFor="telefone" />
              <input
                  type="tel"
                  name="telefone"
                  id="telefone"
                  placeholder="Telefone *"
                  className={`campo ${
                      errors.telefone ? "campo-obrigatorio" : ""
                  } ${
                      touchedFields.telefone && !errors.telefone
                          ? "campo-preenchido"
                          : ""
                  }`}
                  {...register("telefone", {
                      required: "Campo obrigatório",
                  })}
              />
              {errors.telefone && <p>{errors.telefone.message}</p>}

              <label htmlFor="mensagem" />
              <textarea
                  cols="30"
                  rows="5"
                  placeholder="Mensagem *"
                  className={`campo ${
                      errors.mensagem ? "campo-obrigatorio" : ""
                  } ${
                      touchedFields.mensagem && !errors.mensagem
                          ? "campo-preenchido"
                          : ""
                  }`}
                  {...register("mensagem", {
                      required: "Campo obrigatório",
                  })}
              />
              {errors.mensagem && <p>{errors.mensagem.message}</p>}

              <p className="instrucao">*campos obrigatórios</p>

              <button type="submit" className="enviar">
                  Enviar
              </button>
          </form>
      </main>
  );

}

export default App
