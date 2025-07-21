// Simule l'intelligence de Sage qui conseille sur les achats
function conseillerAchat(prix, necessaire) {
  if (prix > 50 && !necessaire) return '💡 Ce n’est peut-être pas un achat utile.';
  return '✅ Achat validé selon vos critères.';
}