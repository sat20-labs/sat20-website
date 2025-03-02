<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Logo and Description -->
        <div class="footer-brand">
          <img src="@/assets/images/sat20-logo.png" alt="SAT20Labs" class="footer-logo">
          <p class="footer-description">{{ $t('footer.info') }}</p>
          <div class="footer-social">
            <a href="https://x.com/SAT20Labs" target="_blank" rel="noopener noreferrer">
              <IconTwitter />
              Twitter
            </a>
            <a href="https://t.me/ordxnals" target="_blank" rel="noopener noreferrer">
              <IconTelegram />
              Telegram
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="footer-nav">
          <div class="footer-section">
            <h3>{{ $t('footer.product') }}</h3>
            <ul>
              <li><router-link to="/">{{ $t('nav.home') }}</router-link></li>
              <li><router-link to="/tech">{{ $t('nav.tech') }}</router-link></li>
              <li><router-link to="/satnet">{{ $t('nav.satnet') }}</router-link></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>{{ $t('footer.developers') }}</h3>
            <ul>
              <li><router-link to="https://docs.sat20.org/">{{ $t('footer.whitepaper') }}</router-link></li>
              <li><router-link to="/docs/api-reference">{{ $t('footer.api') }}</router-link></li>
              <li><a href="https://github.com/sat20-labs/" target="_blank" rel="noopener noreferrer">{{ $t('footer.github') }}</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>{{ $t('footer.community') }}</h3>
            <ul>
              <li><router-link to="/eco">{{ $t('nav.eco') }}</router-link></li>
              <li><a href="https://ordx.market" target="_blank" rel="noopener noreferrer">{{ $t('footer.market') }}</a></li>
              <li><a href="https://app.sat20.org/#/explorer" target="_blank" rel="noopener noreferrer">{{ $t('footer.explorer') }}</a></li>
            </ul>
          </div>
        </div>
      </div>

      <!-- 底部版权 -->
      <div class="footer-bottom">
        <p class="copyright">&copy; {{ new Date().getFullYear() }} SAT20.org. All rights reserved.</p>
        <div class="footer-links">
          <!-- <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import IconTwitter from '@/components/icons/social/IconTwitter.vue';
import IconTelegram from '@/components/icons/social/IconTelegram.vue';

const { t } = useI18n();
</script>

<style lang="scss" scoped>
.footer {
  background: var(--footer-bg);
  color: var(--text-secondary);
  padding: 6rem 0 2rem;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      var(--border-color) 15%,
      var(--border-color) 85%,
      transparent 100%
    );
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .footer-content {
    display: grid;
    grid-template-columns: 1.5fr 2.5fr;
    gap: 4rem;
    margin-bottom: 4rem;
  }

  .footer-brand {
    .footer-logo {
      height: 60px;
      margin-bottom: 1.5rem;
    }

    .footer-description {
      color: var(--text-tertiary);
      line-height: 1.6;
      margin-bottom: 2rem;
      font-size: 0.95rem;
    }

    .footer-social {
      display: flex;
      gap: 1.5rem;
      
      a {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: var(--text-secondary);
        text-decoration: none;
        font-size: 0.95rem;
        transition: all 0.3s ease;

        svg {
          width: 20px;
          height: 20px;
        }

        &:hover {
          color: var(--primary);
          transform: translateY(-2px);
        }
      }
    }
  }

  .footer-nav {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }

  .footer-section {
    h3 {
      color: var(--text-primary);
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      margin-bottom: 1rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      color: var(--text-tertiary);
      text-decoration: none;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      display: inline-block;

      &:hover {
        color: var(--primary);
        transform: translateX(4px);
      }
    }
  }

  .footer-bottom {
    position: relative;
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-tertiary);
    font-size: 0.9rem;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, 
        transparent 0%, 
        var(--border-color) 15%,
        var(--border-color) 85%,
        transparent 100%
      );
    }

    .footer-links {
      display: flex;
      gap: 2rem;

      a {
        color: var(--text-tertiary);
        text-decoration: none;
        transition: color 0.3s ease;
        font-size: 0.9rem;

        &:hover {
          color: var(--primary);
        }
      }
    }
  }

  // iPad Pro 响应式设计 (1024px - 1366px)
  @media (max-width: 1366px) {
    padding: 5rem 0 2rem;

    .container {
      padding: 0 3rem;
    }

    .footer-content {
      gap: 3rem;
    }
  }

  // iPad 响应式设计 (768px - 1024px)
  @media (max-width: 1024px) {
    padding: 4rem 0 2rem;

    .container {
      padding: 0 2rem;
    }

    .footer-content {
      grid-template-columns: 1fr;
      gap: 3rem;
    }

    .footer-brand {
      text-align: center;

      .footer-description {
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
      }

      .footer-social {
        justify-content: center;
      }
    }

    .footer-nav {
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
      text-align: center;
      max-width: 800px;
      margin: 0 auto;

      .footer-section {
        h3 {
          margin-bottom: 1.25rem;
        }

        ul {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        a:hover {
          transform: none;
        }
      }
    }
  }

  // 移动端响应式设计 (< 768px)
  @media (max-width: 768px) {
    padding: 3rem 0 1.5rem;

    .container {
      padding: 0 1.5rem;
    }

    .footer-content {
      gap: 3rem;
    }

    .footer-nav {
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      max-width: 100%;

      .footer-section {
        h3 {
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        ul {
          gap: 0.75rem;
        }

        li {
          margin-bottom: 0.75rem;
        }

        a {
          font-size: 0.9rem;
          
          &:hover {
            transform: none;
          }
        }
      }
    }

    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
      padding-top: 1.5rem;

      .footer-links {
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
      }

      .copyright {
        order: 2;
      }
    }
  }
}
</style>