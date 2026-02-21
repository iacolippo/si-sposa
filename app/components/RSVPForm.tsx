'use client';

import { useState } from 'react';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    allergies: '',
    shuttle: 'no',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

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
    <form onSubmit={handleSubmit} className="bg-crema/40 p-6 rounded-sm border border-crema shadow-sm">
      {/* Name Field */}
      <div className="mb-4">
        <label htmlFor="name" className="block text-xs font-medium text-gray-800 mb-1.5 tracking-wide">
          Nome e Cognome *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-sm focus:ring-1 focus:ring-bordeaux focus:border-bordeaux outline-none transition-all text-gray-800 text-sm"
          placeholder="Mario Rossi"
        />
      </div>

      {/* Allergies Field */}
      <div className="mb-4">
        <label htmlFor="allergies" className="block text-xs font-medium text-gray-800 mb-1.5 tracking-wide">
          Intolleranze o Restrizioni Alimentari
        </label>
        <input
          type="text"
          id="allergies"
          name="allergies"
          value={formData.allergies}
          onChange={handleChange}
          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-sm focus:ring-1 focus:ring-bordeaux focus:border-bordeaux outline-none transition-all text-gray-800 text-sm"
          placeholder="Es: vegetariano, intolleranza al lattosio..."
        />
      </div>

      {/* Shuttle Service Field */}
      <div className="mb-4">
        <label htmlFor="shuttle" className="block text-xs font-medium text-gray-800 mb-1.5 tracking-wide">
          Desideri usare il servizio navetta? *
        </label>
        <select
          id="shuttle"
          name="shuttle"
          value={formData.shuttle}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-white border border-gray-200 rounded-sm focus:ring-1 focus:ring-bordeaux focus:border-bordeaux outline-none transition-all text-gray-800 text-sm"
        >
          <option value="no">No</option>
          <option value="mezzanotte">Sì, con rientro a mezzanotte</option>
          <option value="due">Sì, con rientro alle due</option>
        </select>
      </div>

      {/* Notes Field */}
      <div className="mb-5">
        <label htmlFor="notes" className="block text-xs font-medium text-gray-800 mb-1.5 tracking-wide">
          Note
        </label>
        <textarea
          id="notes"
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-sm focus:ring-1 focus:ring-bordeaux focus:border-bordeaux outline-none transition-all resize-none text-gray-800 text-sm"
          placeholder="Eventuali note o messaggi per noi..."
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-bordeaux text-white py-2.5 px-6 rounded-sm font-medium text-sm tracking-wide hover:bg-bordeaux/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow"
      >
        {isSubmitting ? 'Invio in corso...' : 'Invia RSVP'}
      </button>

      {/* Success Message */}
      {submitStatus === 'success' && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 text-green-800 rounded-sm text-xs">
          ✓ Grazie! La tua risposta è stata registrata con successo.
        </div>
      )}

      {/* Error Message */}
      {submitStatus === 'error' && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-800 rounded-sm text-xs">
          ✗ Si è verificato un errore. Per favore riprova o contattaci direttamente.
        </div>
      )}
    </form>
  );
}
