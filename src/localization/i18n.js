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
          orderConfirmation: "Récaptulatif de commande",
          cartDetail: "Détail du panier",
          paymentMethod: "Méthode de paiement",
          firstName: "Nom",
          lastName: "Prénom",
          email: "Email",
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
          goBackHome: "Retourner à la page d'accueil",
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
          followOrder: "Suivre ma commande",
        },
        followOrder: {
          titleFollowOrder: "Suivi de commande",
          followOrderNumber: "Numéro de commande",
          searchOrder: "Rechercher la commande",
          badOrderNumber: "Aucune commande trouvée. Vérifiez votre numéro de commande et réessayez.",
          backToResearchButton: "Retour à la recherche",
          researchAnotherOrder: "Rechercher une autre commande",
          preparationOnGoing: "En cours de préparation",
          sent: "Expédié",
          deliverOnGoing: "En cours de livraison",
          delivered: "Livré",
          orderDetail: "Détail de la commande"

        }
      }
    },
  }
});

export default i18n;
