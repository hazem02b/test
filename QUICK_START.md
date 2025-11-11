# 🚀 GUIDE DE DÉMARRAGE RAPIDE

## ⚠️ PREMIER LANCEMENT (Obligatoire après clonage)

Après avoir cloné le repository, le site **NE FONCTIONNERA PAS** directement car le dossier `node_modules` n'est pas inclus dans Git.

### 🪟 **Sur Windows** (Méthode Simple)

1. **Double-cliquez** sur le fichier `START.bat`
   - Il installera automatiquement toutes les dépendances
   - Puis lancera le serveur
   - Le site s'ouvrira sur http://localhost:3000

### 💻 **Méthode Manuelle (Tous OS)**

```bash
# 1. Se placer dans le dossier du projet
cd front-end

# 2. OBLIGATOIRE : Installer les dépendances
npm install
# ⏱️ Cette étape prend 2-3 minutes la première fois
# 📦 Télécharge environ 428 packages (~500 MB)

# 3. Lancer le serveur
npm run dev

# 4. Ouvrir le navigateur
# Le site est accessible sur: http://localhost:3000
```

---

## 📋 **Checklist Après Clonage**

- [ ] Node.js installé (version 18+) → Vérifier avec `node --version`
- [ ] npm installé → Vérifier avec `npm --version`
- [ ] Exécuter `npm install` dans le dossier du projet
- [ ] Attendre la fin de l'installation (2-3 minutes)
- [ ] Lancer `npm run dev`
- [ ] Ouvrir http://localhost:3000 dans le navigateur

---

## ❓ **Pourquoi cette étape est nécessaire ?**

Le dossier **`node_modules`** contient toutes les bibliothèques nécessaires :
- Next.js (framework)
- React (interface)
- Tailwind CSS (styles)
- Lucide Icons (icônes)
- Et 424 autres packages...

**Ce dossier n'est PAS sur GitHub** car :
- ❌ Il pèse ~500 MB (trop lourd)
- ❌ Il est listé dans `.gitignore`
- ✅ Il doit être généré localement avec `npm install`

---

## 🐛 **Problèmes Courants**

### ❌ Le site ne s'ouvre pas après clonage
**Cause** : Vous n'avez pas exécuté `npm install`  
**Solution** : Double-cliquez sur `START.bat` ou lancez `npm install` manuellement

### ❌ Erreur "npm not found"
**Cause** : Node.js n'est pas installé  
**Solution** : Téléchargez Node.js depuis https://nodejs.org/

### ❌ Erreur "port 3000 already in use"
**Cause** : Le port 3000 est déjà utilisé  
**Solution** : Next.js choisira automatiquement un autre port (3001, 3002...)

### ❌ Le serveur se lance mais la page est blanche
**Cause** : Problème de compilation  
**Solution** : 
```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules package-lock.json
npm install
```

---

## 🎯 **Commandes Utiles**

| Commande | Description |
|----------|-------------|
| `npm run dev` | Lancer le serveur de développement |
| `npm run build` | Créer une version de production |
| `npm start` | Lancer la version de production |
| `npm run lint` | Vérifier la qualité du code |

---

## 📞 **Support**

Si vous rencontrez des problèmes :
1. Vérifiez que Node.js est installé : `node --version`
2. Vérifiez que vous êtes dans le bon dossier
3. Supprimez `node_modules` et relancez `npm install`
4. Consultez [INSTALLATION.md](./INSTALLATION.md) pour plus de détails

---

## ✅ **Résumé en 3 Étapes**

```bash
git clone https://github.com/hazem02b/front-end.git
cd front-end
npm install && npm run dev
```

**C'est tout !** 🎉
