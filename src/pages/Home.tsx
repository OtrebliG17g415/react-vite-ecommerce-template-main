export function Home() {
  return (
    <div className="container my-5 text-light">
      <h1 className="mb-4">Bienvenue sur notre boutique</h1>
      <p className="lead">
        Découvrez une sélection exclusive de produits digitaux, matériels et denrées à
        des prix accessibles. Notre objectif : vous simplifier la vie avec des achats
        rapides, sécurisés et pratiques.
      </p>

      <div className="row mt-5">
        <div className="col-md-6 mb-4">
          <img
            src="/imgs/hero-digital.jpg"
            alt="Digital Solutions"
            className="img-fluid rounded shadow"
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2>Pourquoi nous choisir ?</h2>
          <ul>
            <li>✔️ Produits 100% vérifiés</li>
            <li>✔️ Paiement sécurisé</li>
            <li>✔️ Livraison rapide et fiable</li>
            <li>✔️ Assistance client dédiée</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
