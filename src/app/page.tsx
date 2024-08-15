import LoginButton from "@/components/LoginButton";

export default function Home() {
  return (
    <main className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 flex h-screen items-center">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl"
          >
            Transforme imagens em dados
            <span className="sm:block">  úteis com rapidez e precisão </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl sm:text-xl/relaxed">
            Faça upload de notas fiscais e deixe a gente fazer o trabalho, entregamos um resumo estruturado e fácil de entender.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <LoginButton />
          </div>
        </div>
      </div>
    </main>
  );
}


