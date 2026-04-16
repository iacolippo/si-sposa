'use client';

import { useState } from 'react';

type Lang = 'it' | 'fr';

const formTranslations = {
  it: {
    nome: 'Nome e Cognome *',
    nomePlaceholder: 'Mario Rossi',
    allergie: 'Intolleranze o Restrizioni Alimentari',
    allergiePlaceholder: 'Es: vegetariano, intolleranza al lattosio...',
    navettaLabel: 'Desideri usare il servizio navetta? *',
    navettaPlaceholder: "Seleziona un'opzione",
    navettaNo: 'No',
    navettaMezzanotte: 'Sì, con rientro a mezzanotte',
    navettaDue: 'Sì, con rientro a fine ricevimento (~2:00)',
    note: 'Note',
    notePlaceholder: 'Eventuali note o messaggi per noi...',
    invio: 'Invio in corso...',
    invia: 'Invia RSVP',
    success: '✓ Grazie! La tua risposta è stata registrata con successo.',
    error: '✗ Si è verificato un errore. Per favore riprova o contattaci direttamente.',
  },
  fr: {
    nome: 'Nom et Prénom *',
    nomePlaceholder: 'Jean Dupont',
    allergie: 'Intolérances ou Restrictions Alimentaires',
    allergiePlaceholder: 'Ex : végétarien, intolérance au lactose...',
    navettaLabel: 'Souhaitez-vous utiliser le service navette ? *',
    navettaPlaceholder: 'Sélectionnez une option',
    navettaNo: 'Non',
    navettaMezzanotte: 'Oui, avec retour à minuit',
    navettaDue: 'Oui, avec retour en fin de réception (~2h00)',
    note: 'Notes',
    notePlaceholder: 'Notes ou messages éventuels pour nous...',
    invio: 'Envoi en cours...',
    invia: 'Envoyer RSVP',
    success: '✓ Merci ! Votre réponse a bien été enregistrée.',
    error: '✗ Une erreur s\'est produite. Veuillez réessayer ou nous contacter directement.',
  },
};

export default function RSVPForm({ lang = 'it' }: { lang?: Lang }) {
  const [formData, setFormData] = useState({
    name: '',
    allergies: '',
    shuttle: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const tx = formTranslations[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', allergies: '', shuttle: 'no', notes: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 p-6 rounded-sm border border-white/20 shadow-sm">
      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-xs font-medium text-white mb-1.5 tracking-wide">
          {tx.nome}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-sm focus:ring-1 focus:ring-bordeaux focus:border-bordeaux outline-none transition-all text-gray-800 text-sm"
          placeholder={tx.nomePlaceholder}
        />
      </div>

      {/* Allergies Field */}
      <div className="mb-4">
        <label htmlFor="allergies" className="block text-xs font-medium text-white mb-1.5 tracking-wide">
          {tx.allergie}
        </label>
        <input
          type="text"
          id="allergies"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-sm focus:ring-1 focus:ring-bordeaux focus:border-bordeaux outline-none transition-all text-gray-800 text-sm"
          placeholder={tx.allergiePlaceholder}
        />
      </div>

      {/* Shuttle Service Field */}
      <div className="mb-4">
        <label htmlFor="shuttle" className="block text-xs font-medium text-white mb-1.5 tracking-wide">
          {tx.navettaLabel}
        </label>
        <select
          id="shuttle"
          name="shuttle"
          value={formData.shuttle}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-sm focus:ring-1 focus:ring-bordeaux focus:border-bordeaux outline-none transition-all text-gray-800 text-sm"
        >
          <option value="" disabled>{tx.navettaPlaceholder}</option>
          <option value="no">{tx.navettaNo}</option>
          <option value="mezzanotte">{tx.navettaMezzanotte}</option>
          <option value="due">{tx.navettaDue}</option>
        </select>
      </div>

      {/* Notes Field */}
      <div className="mb-5">
        <label htmlFor="notes" className="block text-xs font-medium text-white mb-1.5 tracking-wide">
          {tx.note}
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:ring-1 focus:ring-bordeaux focus:border-bordeaux outline-none transition-all resize-none text-gray-800 text-sm"
          placeholder={tx.notePlaceholder}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-crema text-bordeaux py-2.5 px-6 rounded-sm font-medium text-sm tracking-wide hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow"
      >
        {isSubmitting ? tx.invio : tx.invia}
      </button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded-sm text-xs">
          {tx.success}
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded-sm text-xs">
          {tx.error}
        </div>
      )}
    </form>
  );
}
