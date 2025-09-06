import React from "react";
import Layout from "../components/Layout";

const Upload = () => {
  return (
    <div>
      <Layout>
        <div className="border-1 border-gray-300 shadow-2xl rounded-md h-full px-20 py-10 bg-greenrh-50">
          <div>
            <h1 className="text-2xl font-semibold mb-4 border-b pb-2 border-gray-300">
              Aqui é onde você pode fazer upload do seu currículo
            </h1>
          </div>
          <div>
            <p className="text-md border-b pb-4 border-gray-300 mb-4">
              Para carregar seu curriculo, é simples. Basta clicar no botão
              escrito upload abaixo e selecionar o arquivo do seu dispositivo.
              Aceitamos formatos comuns como PDF, DOCX e TXT. Após selecionar o
              arquivo, clique em "Enviar" para completar o processo.
              Certifique-se de que o arquivo esteja atualizado e contenha todas
              as informações relevantes sobre sua experiência e habilidades. Se
              precisar de ajuda, não hesite em entrar em contato com nossa
              equipe de suporte.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="flex justify-center items-center flex-col mt-20 p-10 rounded-md gap-4 h-[20rem] w-full ">
              <form
                action=""
                className="flex justify-center items-center flex-col"
              >
                <div className="border-gray-300 border-dashed border-4 rounded-md bg-white/50 flex items-center justify-center flex-col pb-8">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-15"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                      />
                    </svg>
                  </div>
                  <input
                    type="file"
                    accept=".pdf, .docx, .txt "
                    className="p-20 cursor-pointer "
                    placeholder="Selecione seu arquivo"
                  />
                  <div className="text-sm text-gray-500">
                    <p>Apenas arquivos PDF, DOCX e TXT são aceitos.</p>
                    <p>O tamanho máximo do arquivo é de 5MB.</p>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-green-500 text-white py-2 px-4 rounded-md mt-6 hover:bg-green-600 transition-colors duration-200 cursor-pointer border-1 border-black"
                >
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Upload;
