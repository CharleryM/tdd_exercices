export type Objet = { nom: string; prix: number };

export function ajouterObjet(liste: Objet[], objet: Objet): void {
	liste.push(objet);
}