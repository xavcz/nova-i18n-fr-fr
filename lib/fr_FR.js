import Telescope from 'meteor/nova:lib';
import fr from 'react-intl/locale-data/fr';
import { addLocaleData } from 'react-intl';
import moment from 'moment';

moment.locale('fr', {
    months : "Janvier_Février_Mars_Avril_Mai_Juin_Juillet_Août_Septembre_Octobre_Novembre_Décembre".split("_"),
    monthsShort : "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
    weekdays : "Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split("_"),
    weekdaysShort : "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
    weekdaysMin : "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
    longDateFormat : {
        LT : "HH:mm",
        LTS : "HH:mm:ss",
        L : "DD/MM/YYYY",
        LL : "D MMMM YYYY",
        LLL : "D MMMM YYYY LT",
        LLLL : "dddd D MMMM YYYY LT"
    },
    calendar : {
        sameDay: "[Aujourd'hui à] LT",
        nextDay: '[Demain à] LT',
        nextWeek: 'dddd [à] LT',
        lastDay: '[Hier à] LT',
        lastWeek: 'dddd [dernier à] LT',
        sameElse: 'L'
    },
    relativeTime : {
        future : "dans %s",
        past : "il y a %s",
        s : "quelques secondes",
        m : "une minute",
        mm : "%d minutes",
        h : "une heure",
        hh : "%d heures",
        d : "un jour",
        dd : "%d jours",
        M : "un mois",
        MM : "%d mois",
        y : "une année",
        yy : "%d années"
    },
    ordinalParse : /\d{1,2}(er|ème)/,
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'ème');
    },
    meridiemParse: /PD|MD/,
    isPM: function (input) {
        return input.charAt(0) === 'M';
    },
    // in case the meridiem units are not separated around 12, then implement
    // this function (look at locale/id.js for an example)
    // meridiemHour : function (hour, meridiem) {
    //     return /* 0-23 hour, given meridiem token and hour 1-12 */
    // },
    meridiem : function (hours, minutes, isLower) {
        return hours < 12 ? 'PD' : 'MD';
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
});

addLocaleData([...fr]);

if (typeof T9n !== "undefined") {
  T9n.map('fr',{
    "orUse": "ou",
    "enterUsernameOrEmail": "Nom d'utilisateur ou email",
    "enterPassword": "Mot de passe",
    "enterUsername": "Nom d'utilisateur",
    "enterEmail": "Email",
    "enterNewPassword": "Nouveau mot de passe"
  });
}

Telescope.strings.fr = {
  "forms.submit": "Soumettre",
  "forms.cancel": "Annuler",

  "posts.new_post": "Nouveau Post",
  "posts.edit": "Éditer",
  "posts.edit_success": "Post “{title}” édité avec succès",
  "posts.delete": "Supprimer",
  "posts.delete_confirm": "Supprimer le post “{title}”?",
  "posts.delete_success": "Post “{title}” supprimé.",
  "posts.title": "Titre",
  "posts.url": "URL",
  "posts.body": "Corps",
  "posts.categories": "Catégories",
  "posts.thumbnailUrl": "URL de l'aperçu",
  "posts.status": "Statut",
  "posts.sticky": "Épinglé",
  "posts.load_more": "Voir Plus",
  "posts.load_more_days": "Voir plus de jours",
  "posts.search": "Rechercher",
  "posts.view": "Vue",
  "posts.top": "Populaires",
  "posts.new": "Nouveaux",
  "posts.best": "Meilleurs",
  "posts.pending": "En Attente",
  "posts.rejected": "Rejeté",
  "posts.scheduled": "Planifié",
  "posts.daily": "Jour par jour",
  "posts.clear_thumbnail": "Effacer l'aperçu",
  "posts.enter_thumbnail_url": "Entrer une URL",
  "posts.created_message": "Post créé.",
  "posts.no_more": "Pas de posts supplémentaires.",
  "posts.no_results": "Aucun post à afficher.",
  "posts.postedAt": "Posté le",
  "posts.dateNotDefined": "Date non définie",
  "posts.link_already_posted": "Ce lien a déjà été posté!",

  "comments.comments": "Commentaires",
  "comments.count": "{count, plural, =0 {Pas de commentaires} one {# commentaire} other {# commentaires}}",
  "comments.new": "Nouveau Commentaire",
  "comments.no_comments": "Pas de commentaires.",
  "comments.reply": "Répondre",
  "comments.edit": "Editer",
  "comments.delete": "Supprimer",
  "comments.delete_confirm": "Supprimer le commentaire “{body}”?",
  "comments.delete_success": "Commentaire “{body}” supprimé.",
  "comments.please_log_in": "Veuillez vous connecter pour laisser un commentaire.",
  "comments.parentCommentId": "ID du commentaire parent",
  "comments.topLevelCommentId": "ID du commentaire racine",
  "comments.body": "Corps",

  "users.profile": "Profil",
  "users.complete_profile": "Compléter votre profil",
  "users.edit_account": "Editer le compte",
  "users.edit_success": "Utilisateur “{name}” édité.",
  "users.log_in": "Se connecter",
  "users.log_out": "Se déconnecter",
  "users.telescope.bio": "Biographie",
  "users.telescope.displayName": "Nom Affiché",
  "users.telescope.email": "Email",
  "users.telescope.twitterUsername": "Nom d'Utilisateur Twitter",
  "users.telescope.website": "Site Web",
  "users.notifications": "Notifications",
  "users.telescope.notifications_users": "Notifier pour les nouveaux utilisateurs",
  "users.telescope.notifications_posts": "Notifier pour les nouveaux posts",
  "users.telescope.newsletter_subscribeToNewsletter": "S'abonner à la newsletter",
  "users.telescope.newsletter.subscribed": "Inscrit à la newsletter",
  "users.telescope.groups": "Groupes",
  "users.admin": "Admin",
  "users.isAdmin": "Admin",
  "users.posts": "Posts",
  "users.please_log_in": "Veuillez vous connecter",
  "users.cannot_post": "Désolé, vous ne disposez pas des permissions nécéssaires pour poster actuellement.",

  "categories": "Catégories",
  "categories.all": "Toutes les catégories",
  "categories.edit": "Editer la catégorie",
  "categories.new": "Nouvelle catégorie",
  "categories.delete": "Supprimer la catégorie",
  "categories.name": "Nom",
  "categories.description": "Description",
  "categories.order": "Ordre",
  "categories.slug": "Identifiant",
  "categories.image": "Image",
  "categories.parentId": "ID Parent",

  "settings": "Réglages",
  "settings.json_message": "Note: les réglages déjà spécifié dans le fichier <code>settings.json</code> seront désactivés.",
  "settings.edit": "Editer les réglages",
  "settings.edited": "Réglages édités (veuillez rafraichir la page).",
  "settings.title": "Titre",
  "settings.siteUrl": "URL du site",
  "settings.tagline": "Slogan",
  "settings.description": "Description",
  "settings.siteImage": "Image du site",
  "settings.defaultEmail": "Email par défaut",
  "settings.mailUrl": "URL Mail",
  "settings.scoreUpdate": "Mise à jour des scores",
  "settings.postInterval": "Interval des posts",
  "settings.RSSLinksPointTo": "Les liens RSS pointent vers",
  "settings.commentInterval": "Interval des commentaires",
  "settings.maxPostsPerDay": "Limite quotidienne des posts",
  "settings.startInvitesCount": "Nombre d'invitations au départ",
  "settings.postsPerPage": "Posts par pages",
  "settings.logoUrl": "URL du logo",
  "settings.logoHeight": "Hauteur du logo",
  "settings.logoWidth": "Largeur du logo",
  "settings.faviconUrl": "URL du favicon",
  "settings.twitterAccount": "Compte Twitter",
  "settings.facebookPage": "Page Facebook",
  "settings.googleAnalyticsId": "ID Google Analytics",
  "settings.locale": "Location",

  "app.loading": "Chargement…",
  "app.404": "Désolé, le contenu demandé n'a pas été trouvé.",
  "app.powered_by": "Propulsé par Telescope",
  "app.or": "Ou",

  "newsletter": "Newsletter",
  "newsletter.subscribe": "S'inscrire", 
  "newsletter.unsubscribe": "Se désinscrire",
  "newsletter.subscribe_prompt": "Inscrivez-vous à notre newsletter",
  "newsletter.email": "Votre email",
  "newsletter.success_message": "Merci pour votre inscription!",
  "newsletter.subscription_updated": "Souscription à la newsletter mise à jour.",

  "admin": "Admin",
  "notifications": "Notifications", 
};
