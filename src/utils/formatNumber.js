export default function formatNumber(num) {
  return new Intl.NumberFormat("fa-IR").format(num);
}
