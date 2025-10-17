export type Objet = { nom: string; prix: number };

export function creerPanier(): Objet[] {
  return [];
}

export function ajouterObjet(liste: Objet[], objet: Objet): void {
  liste.push(objet);
}

export function calculerPrixTotal(liste: Objet[]): number {
  return liste.reduce((acc, obj) => acc + obj.prix, 0);
}
