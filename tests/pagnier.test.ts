import { describe, test, expect } from "@jest/globals";
import { creerPanier, ajouterObjet, calculerPrixTotal, Objet } from '../src/pagner';describe('Pagnier', () => {
	test('le panier est vide à l\'initialisation', () => {
		const liste: { nom: string; prix: number }[] = [];
		expect(liste).toHaveLength(0);
	});

	test('ajoute un objet { nom, prix } dans la liste', () => {
		const liste: { nom: string; prix: number }[] = [];
		ajouterObjet(liste, { nom: 'pomme', prix: 2 });
		expect(liste).toContainEqual({ nom: 'pomme', prix: 2 });
	});

	test.each([
		[{ nom: 'pomme', prix: 2 }],
		[{ nom: 'banane', prix: 1.5 }],
		[{ nom: 'orange', prix: 3 }],
	])('ajoute %o dans la liste (paramétré)', (objet) => {
		const liste: { nom: string; prix: number }[] = [];
		ajouterObjet(liste, objet);
		expect(liste).toContainEqual(objet);
	});

	test('calcule le prix total des objets', () => {
		const liste: { nom: string; prix: number }[] = [
			{ nom: 'pomme', prix: 2 },
			{ nom: 'banane', prix: 1.5 },
			{ nom: 'orange', prix: 3 }
		];
		const total = liste.reduce((acc, obj) => acc + obj.prix, 0);
		expect(total).toBeCloseTo(6.5);
	});
});


