# الهدهد المعلّم — application préscolaire installable

Application éducative pour l'éducation préparatoire (5–6 ans), alignée sur les cahiers officiels du ministère de l'Éducation nationale.

## Contenu du dossier

| Fichier | Rôle |
|---|---|
| `index.html` | L'application complète |
| `manifest.webmanifest` | Nom, couleurs et icônes pour l'installation |
| `sw.js` | Service worker : fonctionnement hors ligne |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png`, `apple-touch-icon.png` | Icônes |

Tous les fichiers doivent rester **à la racine** du dépôt, au même niveau.

## Mise en ligne sur GitHub Pages

1. Connectez-vous à GitHub et créez un nouveau dépôt **public** (par exemple `hudhud`). GitHub Pages est disponible dans les dépôts publics avec le compte gratuit.
2. Dans le dépôt : **Add file → Upload files**, sélectionnez les 8 fichiers de ce dossier, puis **Commit changes**.
3. Ouvrez **Settings → Pages**. Sous « Build and deployment », choisissez **Source : Deploy from a branch**, puis la branche **main** et le dossier **/ (root)**, et cliquez **Save**.
4. Après quelques minutes, l'adresse s'affiche en haut de la page Pages, sous la forme `https://<votre-nom>.github.io/hudhud/`.

Sur téléphone, décompressez d'abord l'archive (application « Fichiers »), puis sélectionnez les 8 fichiers ensemble dans la fenêtre d'envoi de GitHub.

## Installation sur l'appareil

- **Android (Chrome)** : ouvrez l'adresse dans Chrome, puis touchez **📲 ثبّت التطبيق** sur l'accueil de l'application. Si Chrome n'affiche pas sa fenêtre d'installation, le bouton affiche les étapes : menu ⋮ → **Installer l'application**.
- L'installation n'est **jamais proposée automatiquement** : Chrome attend que la page ait été touchée et regardée au moins 30 secondes, et Safari ne la propose pas du tout. C'est normal.
- **iPhone / iPad (Safari)** : bouton **Partager** → **Sur l'écran d'accueil**.
- **Ordinateur (Chrome / Edge)** : icône d'installation dans la barre d'adresse.

Après la première ouverture, l'application fonctionne **sans Internet**.

## Mettre à jour

1. Remplacez `index.html` dans le dépôt (Upload files, même nom).
2. Dans `sw.js`, changez la ligne `const CACHE = 'hudhud-v6';` (par exemple `hudhud-v7`) et envoyez-le aussi.
3. Les appareils reçoivent la nouvelle version en arrière-plan ; elle s'affiche à l'ouverture suivante.

## À savoir

- Les étoiles, le suivi et les enregistrements vocaux sont stockés **dans le navigateur de chaque appareil**. La version ouverte depuis un fichier et la version GitHub ne partagent pas ces données.
- L'enregistrement de la voix de l'enseignant(e) (espace parents → 🎙️) nécessite l'adresse **https** de GitHub Pages et l'autorisation du micro.
- L'espace parents est protégé par une petite multiplication.
