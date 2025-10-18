import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 100%);
  color: white;
  padding: 40px 0 20px;
  margin-top: auto;

  @media (max-width: 768px) {
    padding: 30px 0 15px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const FooterMain = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 25px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #ecf0f1;

    @media (max-width: 768px) {
      font-size: 16px;
      margin-bottom: 12px;
    }
  }
  
  p, li {
    font-size: 14px;
    line-height: 1.6;
    color: #bdc3c7;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      font-size: 13px;
      line-height: 1.5;
    }
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    cursor: pointer;
    transition: color 0.3s ease;
    
    &:hover {
      color: #3498db;
    }
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #34495e;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 15px;
    padding-top: 15px;
  }
`;

const Copyright = styled.div`
  font-size: 14px;
  color: #95a5a6;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 18px;
  
  &:hover {
    background: #3498db;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 16px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterMain>
          <FooterSection>
            <h3>📚 漢字マスターについて</h3>
            <p>
              日本語学習者のための漢字クイズアプリです。
              段階的な学習で漢字をマスターしましょう。
            </p>
          </FooterSection>
          
          <FooterSection>
            <h3>🎯 学習レベル</h3>
            <ul>
              <li>初級 - 基本的な漢字（数字、曜日、身体など）</li>
              <li>中級 - 日常でよく使う漢字（時間、家族、色など）</li>
              <li>上級 - 複雑な漢字（感情、行動、社会など）</li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>💡 学習のコツ</h3>
            <ul>
              <li>毎日少しずつ継続する</li>
              <li>間違えた漢字を復習する</li>
              <li>実際の文章で使ってみる</li>
              <li>楽しみながら学習する</li>
            </ul>
          </FooterSection>
          
          <FooterSection>
            <h3>🔗 リンク</h3>
            <ul>
              <li>日本語学習リソース</li>
              <li>漢字辞典</li>
              <li>学習コミュニティ</li>
              <li>お問い合わせ</li>
            </ul>
          </FooterSection>
        </FooterMain>
        
        <FooterBottom>
          <Copyright>
            © 2024 漢字マスター. All rights reserved. Made with ❤️ for Japanese learners.
          </Copyright>
          
          <SocialLinks>
            <SocialLink href="#" aria-label="Twitter">🐦</SocialLink>
            <SocialLink href="#" aria-label="GitHub">🐙</SocialLink>
            <SocialLink href="#" aria-label="Email">📧</SocialLink>
          </SocialLinks>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
