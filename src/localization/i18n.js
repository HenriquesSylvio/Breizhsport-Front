import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
  debug: true,
  fallbackLng: 'fr',
  resources: {
    fr: {
      translation: {
        generic: {
          next: "Suivant",
          back: "Précédent"
        },
        cart: {
          cartTitle: "Panier",
          goCheckout: "Commander",
          emptyCart:'Votre panier est vide.'
        },
        checkout: {
          checkoutTitle: "Panier",
          shippingAddress: "Adresse de livraison",
          paymentDetails: "Paiement",
          cartDetail: "Détail du panier",
          paymentMethod: "Méthode de paiement",
          firstName: "Nom",
          lastName: "Prénom",
          address: "Adresse",
          city: "Ville",
          region: "Département / Région",
          zipCode: "Code postal",
          country: "Pays",
          useAddressForPayment: "Utiliser cette adresse pour le paiement",
          nameOnCard: "Titulaire de la carte",
          cardNumber: "Numéro de carte",
          expiryDate: "Date d'expiration",
          CVV: "CVV",
          shipping: "Livraison",
          payment: "Paiement",
          confirmOrder: "Valider la commande",
          thanksForOrder: "Merci pour votre commande",
          orderNumber: "Votre numéro de commande est le ",
          resumeByEmail: "Vous recevrez prochainement un email de confirmation.",
          confirmedOrder: "Commande validée",
        },
        item: {
          viewDetail: "Voir",
          addToCart: "Ajouter au panier",
          modifyCart: "Modifier le panier",
          allProducts: "Tous les produits"
        },
        navbar: {
          seeAll: "Voir tout",
        }
      }
    },
  }
});

export default i18n;
