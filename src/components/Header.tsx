import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 20px 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.05)"/><circle cx="10" cy="60" r="0.5" fill="rgba(255,255,255,0.05)"/><circle cx="90" cy="40" r="0.5" fill="rgba(255,255,255,0.05)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }

  @media (max-width: 768px) {
    padding: 15px 0;
  }
`;

const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 0 15px;
    flex-direction: column;
    gap: 15px;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const LogoIcon = styled.div`
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
  }
`;

const LogoText = styled.div`
  h1 {
    font-size: 28px;
    font-weight: bold;
    margin: 0;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
  
  p {
    font-size: 14px;
    margin: 0;
    opacity: 0.9;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 11px;
    }
  }
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StatsContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    gap: 12px;
  }

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

const StatItem = styled.div`
  text-align: center;
  
  .stat-number {
    font-size: 20px;
    font-weight: bold;
    display: block;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
  
  .stat-label {
    font-size: 12px;
    opacity: 0.8;
    font-weight: 300;

    @media (max-width: 768px) {
      font-size: 11px;
    }

    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <LogoIcon>📚</LogoIcon>
          <LogoText>
            <h1>漢字マスター</h1>
            <p>Japanese Kanji Learning Platform</p>
          </LogoText>
        </Logo>
        
        <HeaderActions>
          <StatsContainer>
            <StatItem>
              <span className="stat-number">3</span>
              <span className="stat-label">レベル</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">🎲</span>
              <span className="stat-label">ランダムに出題</span>
            </StatItem>
            <StatItem>
              <span className="stat-number">∞</span>
              <span className="stat-label">学習</span>
            </StatItem>
          </StatsContainer>
        </HeaderActions>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
