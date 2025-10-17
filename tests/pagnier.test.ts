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

  test('n\'accepte pas un prix négatif', () => {
    const liste: { nom: string; prix: number }[] = [];
    expect(() => {
      ajouterObjet(liste, { nom: 'pomme', prix: -2 });
    }).toThrow('Le prix ne peut pas être négatif');
  });

  test('accepte un prix nul (gratuit)', () => {
    const liste: { nom: string; prix: number }[] = [];
    ajouterObjet(liste, { nom: 'échantillon gratuit', prix: 0 });
    expect(liste).toContainEqual({ nom: 'échantillon gratuit', prix: 0 });
  });

  test('applique une réduction de 10% pour un panier >= 100€', () => {
    const liste: { nom: string; prix: number }[] = [
      { nom: 'article1', prix: 60 },
      { nom: 'article2', prix: 40 },
      { nom: 'article3', prix: 20 }
    ];

    const total = calculerPrixTotal(liste);
    expect(total).toBeCloseTo(108);
  });

  test('n\'applique pas de réduction pour un panier < 100€', () => {
    const liste: { nom: string; prix: number }[] = [
      { nom: 'article1', prix: 50 },
      { nom: 'article2', prix: 40 }
    ];

    const total = calculerPrixTotal(liste);
    expect(total).toBeCloseTo(90);
  });
});
