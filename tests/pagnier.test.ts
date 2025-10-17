
import { describe, test, expect } from "@jest/globals";

function ajouterObjet(liste: { nom: string; prix: number }[], objet: { nom: string; prix: number }) {
	liste.push(objet);
}

describe('Pagnier', () => {
	test('le panier est vide à l\'initialisation', () => {
		const liste: { nom: string; prix: number }[] = [];
		expect(liste).toHaveLength(0);
	});
	test('ajoute un objet { nom, prix } dans la liste', () => {
		const liste: { nom: string; prix: number }[] = [];
		ajouterObjet(liste, { nom: 'pomme', prix: 2 });
		expect(liste).toContainEqual({ nom: 'pomme', prix: 2 });
	});
});

describe('Pagnier ParameterizedTest', () => {
	test.each([
		[{ nom: 'pomme', prix: 2 }],
		[{ nom: 'banane', prix: 1.5 }],
		[{ nom: 'orange', prix: 3 }],
	])('ajoute %o dans la liste', (objet) => {
		const liste: { nom: string; prix: number }[] = [];
		ajouterObjet(liste, objet);
		expect(liste).toContainEqual(objet);
	});
});


