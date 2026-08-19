# Setup Guide - Sito Matrimonio Ines & Iacopo

## 🎉 Benvenuti!

Questo è il sito web per il vostro matrimonio, con tutte le funzionalità richieste:
- ✅ Informazioni sul matrimonio
- ✅ Formulario RSVP con Google Sheets
- ✅ Dettagli viaggio di nozze
- ✅ IBAN per contributi
- ✅ Consigli per la domenica a Trieste
- ✅ Contatti

## 🚀 Setup Iniziale

### 1. Installazione Dipendenze

Le dipendenze sono già installate, ma se necessario:

```bash
npm install
```

### 2. Configurazione Google Sheets

Per ricevere le risposte RSVP in un Google Sheet, segui questi passi:

#### A. Crea un Google Sheet

1. Vai su [Google Sheets](https://sheets.google.com)
2. Crea un nuovo foglio di calcolo
3. Rinominalo "RSVP Matrimonio Ines & Iacopo"
4. Aggiungi questi header nella prima riga:
   - `Timestamp`
   - `Nome`
   - `Intolleranze`
   - `Navetta`
   - `Note`
5. Copia l'ID del foglio dall'URL (la parte tra `/d/` e `/edit`):
   - URL: `https://docs.google.com/spreadsheets/d/ABC123XYZ/edit`
   - ID: `ABC123XYZ`

#### B. Crea un Service Account Google

1. Vai su [Google Cloud Console](https://console.cloud.google.com)
2. Crea un nuovo progetto (es: "wedding-website")
3. Abilita la Google Sheets API:
   - Vai su "APIs & Services" > "Library"
   - Cerca "Google Sheets API"
   - Clicca "Enable"
4. Crea un Service Account:
   - Vai su "APIs & Services" > "Credentials"
   - Clicca "Create Credentials" > "Service Account"
   - Nome: "wedding-rsvp"
   - Clicca "Create and Continue"
   - Ruolo: "Editor"
   - Clicca "Done"
5. Crea una chiave privata:
   - Clicca sul service account appena creato
   - Vai su "Keys" > "Add Key" > "Create New Key"
   - Scegli "JSON"
   - Scarica il file JSON

#### C. Configura il progetto

1. Apri il file JSON scaricato
2. Copia i valori nel file `.env.local`:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`: copia il valore di `client_email`
   - `GOOGLE_PRIVATE_KEY`: copia il valore di `private_key` (mantieni i `\n`)
   - `GOOGLE_SHEET_ID`: l'ID del foglio copiato prima

3. Condividi il Google Sheet con il service account:
   - Apri il tuo Google Sheet
   - Clicca "Share"
   - Incolla l'email del service account (`GOOGLE_SERVICE_ACCOUNT_EMAIL`)
   - Dai permessi "Editor"
   - Clicca "Send"

### 3. Personalizzazione Contenuti

Modifica questi file per personalizzare il sito:

#### `app/page.tsx`
- **Sezione "Chi Siamo"**: Scrivi la vostra storia (righe 38-47)
- **Email contatti**: Sostituisci `ines@example.com`, `iacopo@example.com` e `stefano.pilotto@example.com` con le email reali (righe 182-199)

#### IBAN Bonifico
- Sostituisci il placeholder `IT00X0000000000000000000000` con il vostro IBAN Revolut (riga 132 in `app/page.tsx`)

## 📸 Setup Galleria Foto (Cloudinary)

La pagina `/gallery` permette agli invitati di caricare foto scansionando un QR code, mostrandole poi in una griglia pubblica. Usa [Cloudinary](https://cloudinary.com) (piano gratuito) per lo storage.

### A. Crea l'account Cloudinary

1. Vai su [cloudinary.com](https://cloudinary.com) e crea un account gratuito
2. Nella dashboard, prendi nota di **Cloud Name**, **API Key** e **API Secret**

### B. Crea un upload preset "unsigned" con restrizioni

1. Vai su **Settings** (⚙️) → **Upload** → **Upload presets** → **Add upload preset**
2. Imposta:
   - **Signing Mode**: `Unsigned` (necessario per caricare direttamente dal browser degli invitati, senza passare dal server)
   - **Folder**: `wedding-gallery`
   - **Tags**: `guest-upload` (deve combaciare con `GALLERY_TAG` in `app/lib/cloudinary.ts`)
   - **Allowed formats**: `jpg,png,heic,heif,webp`
   - **Max file size**: `15000000` (15MB — combacia con il limite lato client nella pagina galleria). Se non trovi questo campo nella UI, impostalo via API:
     ```bash
     curl -X PUT https://api.cloudinary.com/v1_1/<CLOUD_NAME>/upload_presets/<preset_name> \
       -u <API_KEY>:<API_SECRET> \
       -d "max_file_size=15000000"
     ```
   - **Incoming transformation**: `c_limit,w_2000,h_2000,q_auto` (ridimensiona automaticamente le foto enormi senza ritagliarle, per non sprecare credito Cloudinary — usa `c_limit`, mai `c_fill`, per non tagliare via parti della foto)
3. Salva e copia il **nome del preset** (se non lo ritrovi più nella UI, lista tutti i preset con `curl -s -u <API_KEY>:<API_SECRET> https://api.cloudinary.com/v1_1/<CLOUD_NAME>/upload_presets`)

⚠️ **Non collegare una carta di credito** all'account Cloudinary e non attivare l'auto-upgrade: così, se il piano gratuito (25 credit/mese) viene superato, gli upload smettono semplicemente di funzionare invece di generare un addebito.

### C. Configura le variabili d'ambiente

In `.env.local` e nelle Environment Variables di Vercel:
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`: il tuo Cloud Name (= "Product Environment" nella dashboard)
- `NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET`: il nome del preset creato sopra
- `CLOUDINARY_API_KEY`: la tua API Key
- `CLOUDINARY_API_SECRET`: la tua API Secret (usata solo lato server per elencare le foto — non esporla mai al client)

Dopo averle aggiunte su Vercel serve un redeploy (push o "Redeploy" da dashboard) perché vengano applicate.

### D. Genera il QR code

Punta il QR code a `https://tuosito.it/gallery` (usa un generatore QR gratuito, es. [qr-code-generator.com](https://www.qr-code-generator.com)) e stampalo per gli invitati.

### E. Eliminare foto indesiderate

Non c'è un pannello di amministrazione nel sito: per rimuovere una foto, vai nella [Cloudinary Media Library](https://console.cloudinary.com/console/media_library), apri la cartella `wedding-gallery` ed eliminala da lì.

## 🎨 Palette Colori

I colori sono già configurati in `app/globals.css`:
- **Bordeaux**: `#712231`
- **Crema**: `#EBE3D8`
- **Bianco**: `#F8F8F8`
- **Argento**: `#C0C0C0`

## 🧪 Test in Locale

Avvia il server di sviluppo:

```bash
npm run dev
```

Apri [http://localhost:3000](http://localhost:3000) nel browser.

Testa il formulario RSVP e verifica che i dati arrivino nel Google Sheet.

## 📦 Deploy su Vercel

### 1. Push su GitHub

```bash
git add .
git commit -m "Wedding website setup"
git remote add origin https://github.com/USERNAME/wedding-website.git
git push -u origin main
```

### 2. Deploy su Vercel

1. Vai su [vercel.com](https://vercel.com)
2. Clicca "New Project"
3. Importa il repository GitHub
4. Aggiungi le variabili d'ambiente:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `GOOGLE_PRIVATE_KEY`
   - `GOOGLE_SHEET_ID`
5. Clicca "Deploy"

### 3. Dominio Personalizzato

1. Nel dashboard Vercel, vai su "Settings" > "Domains"
2. Aggiungi il tuo dominio (es: `ineseiacopo.it`)
3. Segui le istruzioni per configurare il DNS

Vercel supporta domini da vari provider (Google Domains, Namecheap, GoDaddy, etc.)

## 📱 Funzionalità del Sito

### Home
- Hero section con nomi e data
- Navigazione sticky con smooth scroll

### Chi Siamo
- Sezione "about us" personalizzabile

### Il Matrimonio
- Dettagli cerimonia (Chiesa di San Bartolomeo, Barcola)
- Dettagli ricevimento (Castello di Spessa, Capriva del Friuli)
- Orari e indirizzi

### RSVP
- Form con validazione
- Campi: nome, intolleranze, navetta, note
- Deadline: 30 giugno 2026
- Salvataggio automatico su Google Sheets

### Viaggio di Nozze
- Destinazione: Messico - Yucatán
- IBAN per contributi

### Domenica a Trieste
- Citazione dialettale triestina
- Consigli su cosa fare a Trieste

### Contatti
- Email sposi
- Email wedding planner (Stefano Pilotto)

## 🔧 Troubleshooting

### Il form RSVP non funziona
- Verifica che tutte le variabili d'ambiente siano configurate
- Controlla che il service account abbia accesso al Google Sheet
- Verifica i log di Vercel o della console

### Errori di build
- Assicurati che Node.js sia aggiornato (v18+)
- Esegui `npm install` per reinstallare le dipendenze

## 📞 Supporto

Per domande o problemi, contattami!

---

**Fatto con ❤️ per Ines & Iacopo**
