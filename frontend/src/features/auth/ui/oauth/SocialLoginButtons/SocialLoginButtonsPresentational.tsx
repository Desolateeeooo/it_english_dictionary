import styles from './SocialLoginButtons.module.css';

interface ISocialLoginButtons {
  handleGoogleClick?: () => void;
  handleGitHubClick?: () => void;
  handleMicrosoftClick?: () => void;
  handleYandexClick?: () => void;
  onYandexClick?: () => void;
  variant?: 'default' | 'compact' | 'icons-only';
}

function SocialLoginButtonsPresentational({
  handleGoogleClick,
  handleGitHubClick,
  handleMicrosoftClick,
  handleYandexClick,
  onYandexClick,
  variant = 'default',
}: ISocialLoginButtons) {
  return (
    <div className={`${styles.socialButtons} ${styles[variant]}`}>
      {/* Google Button */}
      <button
        type="button"
        className={`${styles.socialButton} ${styles.google}`}
        onClick={handleGoogleClick}
        aria-label="Sign in with Google"
      >
        <div className={styles.iconContainer}>
          <img
            src="/icons/google.svg"
            alt="Google"
            className={styles.icon}
            onError={(e) => {
              // Fallback if icon doesn't exist
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.textContent = 'G';
            }}
          />
        </div>
        {variant !== 'icons-only' && (
          <span className={styles.buttonText}>
            {variant === 'compact' ? 'Google' : 'Continue with Google'}
          </span>
        )}
      </button>

      {/* GitHub Button */}
      <button
        type="button"
        className={`${styles.socialButton} ${styles.github}`}
        onClick={handleGitHubClick}
        aria-label="Sign in with GitHub"
      >
        <div className={styles.iconContainer}>
          <img
            src="/icons/github.svg"
            alt="GitHub"
            className={styles.icon}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.textContent = 'GH';
            }}
          />
        </div>
        {variant !== 'icons-only' && (
          <span className={styles.buttonText}>
            {variant === 'compact' ? 'GitHub' : 'Continue with GitHub'}
          </span>
        )}
      </button>

      {/* Microsoft Button */}
      <button
        type="button"
        className={`${styles.socialButton} ${styles.microsoft}`}
        onClick={handleMicrosoftClick}
        aria-label="Sign in with Microsoft"
      >
        <div className={styles.iconContainer}>
          <img
            src="/icons/microsoft.svg"
            alt="Microsoft"
            className={styles.icon}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.parentElement!.textContent = 'MS';
            }}
          />
        </div>
        {variant !== 'icons-only' && (
          <span className={styles.buttonText}>
            {variant === 'compact' ? 'Microsoft' : 'Continue with Microsoft'}
          </span>
        )}
      </button>

      {/* Optional: Yandex Button */}
      {onYandexClick && (
        <button
          type="button"
          className={`${styles.socialButton} ${styles.yandex}`}
          onClick={handleYandexClick}
          aria-label="Sign in with Yandex"
        >
          <div className={styles.iconContainer}>
            <img
              src="/icons/yandex.svg"
              alt="Yandex"
              className={styles.icon}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.textContent = 'Y';
              }}
            />
          </div>
          {variant !== 'icons-only' && (
            <span className={styles.buttonText}>
              {variant === 'compact' ? 'Yandex' : 'Continue with Yandex'}
            </span>
          )}
        </button>
      )}
    </div>
  );
}

export default SocialLoginButtonsPresentational;
