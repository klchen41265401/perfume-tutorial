<template>
  <footer class="footer">
    <p>{{ t("common.footerCopyright") }}</p>
    <p class="footer-sub">{{ t("common.footerSub") }}</p>
  </footer>
</template>

<script>
import { useLanguage } from "../composables/useLanguage.js";

export default {
  name: "FooterBar",
  setup() {
    const { t } = useLanguage();
    return { t };
  },
};
</script>

<style scoped>
.footer {
  margin-top: 4rem;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid rgba(15, 40, 22, 0.2);
  color: var(--text-muted);
  font-size: 0.9rem;
}
.footer-sub {
  margin-top: 0.5rem;
  font-size: 0.85rem;
}

@media (max-width: 767px) {
  .footer {
    margin-top: 2rem;
    padding: 1.25rem 0.75rem;
    font-size: 0.82rem;
  }
  .footer-sub {
    font-size: 0.78rem;
  }
}

@media (max-width: 479px) {
  .footer {
    margin-top: 1.5rem;
    padding: 1rem 0.5rem;
    font-size: 0.78rem;
  }
  .footer-sub {
    font-size: 0.72rem;
    margin-top: 0.3rem;
  }
}
</style>
