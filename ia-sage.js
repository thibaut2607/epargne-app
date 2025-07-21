
function conseillerAchat(prix, necessaire) {
  if (isNaN(prix)) return "❗ Entrez un prix valide.";
  if (prix > 50 && !necessaire) return "💡 Ce n’est peut-être pas un achat utile.";
  if (prix > 100) return "⚠️ Achat coûteux. Êtes-vous sûr ?";
  return "✅ Achat raisonnable selon vos critères.";
}
