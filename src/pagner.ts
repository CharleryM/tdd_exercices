export type Objet = { nom: string; prix: number };

export function creerPanier(): Objet[] {
  return [];
}

export function ajouterObjet(liste: Objet[], objet: Objet): void {
  if (objet.prix < 0) {
    throw new Error('Le prix ne peut pas être négatif');
  }
  liste.push(objet);
}

export function calculerPrixTotal(liste: Objet[]): number {
  const sousTotal = liste.reduce((acc, obj) => acc + obj.prix, 0);
  
  if (sousTotal >= 100) {
    return sousTotal * 0.9; 
  }
  
  return sousTotal;
}
