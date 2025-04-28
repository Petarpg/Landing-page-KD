import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/CourseContent.css';

const OfferSection = () => {
  const { t } = useLanguage();

  return (
    <section className="content-section">
      <div className="section-content">
        <h2>{t('specialOfferTitle')}</h2>
        <div className="offer">
          <p className="original-price">{t('originalPrice')}</p>
          <p className="special-price">{t('specialPrice')}</p>
          <div className="guarantee">
            <p>{t('guarantee')}</p>
            <p>{t('guaranteeText')}</p>
          </div>
          <div className="offer-features">
            <p>{t('offerFeature1')}</p>
            <p>{t('offerFeature2')}</p>
            <p>{t('offerFeature3')}</p>
          </div>
          <button className="start-button" onClick={() => window.open('https://whop.com/viral-video-social-media/', '_blank')}>
            {t('startNow')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferSection; 