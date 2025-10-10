import React from 'react';
import styled from 'styled-components';
import MountainIllustration from './MountainIllustration';

const IllustrationContainer = styled.div`
  margin: 25px 0;
  display: flex;
  justify-content: center;
`;

// 基本的なイラストのベーススタイル
const BaseIllustration = styled.div`
  width: 200px;
  height: 120px;
  border-radius: 15px;
  position: relative;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 600px) {
    width: 160px;
    height: 100px;
  }
`;

// 川のイラスト
const RiverIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #87CEEB 60%, #4682B4 100%);
  
  &::before {
    content: '';
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    height: 3px;
    background: #4169E1;
    animation: flow 2s linear infinite;
  }
  
  @keyframes flow {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`;

// 花のイラスト
const FlowerIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #98FB98 100%);
  
  &::before {
    content: '🌸';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
  }
`;

// 木のイラスト
const TreeIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #90EE90 100%);
  
  &::before {
    content: '🌳';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 水のイラスト
const WaterIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #4169E1 100%);
  
  &::before {
    content: '💧';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    animation: drip 2s ease-in-out infinite;
  }
  
  @keyframes drip {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(20px); }
  }
`;

// 太陽のイラスト
const SunIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFD700 0%, #FFA500 100%);
  
  &::before {
    content: '☀️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    animation: rotate 4s linear infinite;
  }
  
  @keyframes rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;

// 星のイラスト
const StarIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #191970 0%, #000080 100%);
  
  &::before {
    content: '⭐';
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    animation: twinkle 2s ease-in-out infinite;
  }
  
  @keyframes twinkle {
    0%, 100% { opacity: 1; transform: translateX(-50%) scale(1); }
    50% { opacity: 0.5; transform: translateX(-50%) scale(1.2); }
  }
`;

// 月のイラスト
const MoonIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #191970 0%, #000080 100%);
  
  &::before {
    content: '🌙';
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
  }
`;

// 雲のイラスト
const CloudIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #B0C4DE 100%);
  
  &::before {
    content: '☁️';
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    animation: float 3s ease-in-out infinite;
  }
  
  @keyframes float {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(-10px); }
  }
`;

// 海のイラスト
const SeaIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #4682B4 100%);
  
  &::before {
    content: '🌊';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    animation: wave 2s ease-in-out infinite;
  }
  
  @keyframes wave {
    0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
    50% { transform: translate(-50%, -50%) rotate(5deg); }
  }
`;

// 森のイラスト
const ForestIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #228B22 100%);
  
  &::before {
    content: '🌲';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 空のイラスト
const SkyIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '☁️';
    position: absolute;
    top: 20px;
    left: 30%;
    font-size: 30px;
    animation: float 3s ease-in-out infinite;
  }
  
  &::after {
    content: '☁️';
    position: absolute;
    top: 40px;
    right: 30%;
    font-size: 25px;
    animation: float 3s ease-in-out infinite 1.5s;
  }
`;

// 嵐のイラスト
const StormIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #696969 0%, #2F4F4F 100%);
  
  &::before {
    content: '⛈️';
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    animation: flash 1s ease-in-out infinite;
  }
  
  @keyframes flash {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
  }
`;

// 虹のイラスト
const RainbowIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '🌈';
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
  }
`;

// 雪のイラスト
const SnowIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #F0F8FF 100%);
  
  &::before {
    content: '❄️';
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
    animation: fall 3s linear infinite;
  }
  
  @keyframes fall {
    0% { transform: translateX(-50%) translateY(-20px); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateX(-50%) translateY(100px); opacity: 0; }
  }
`;

// 雷のイラスト
const ThunderIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #696969 0%, #2F4F4F 100%);
  
  &::before {
    content: '⚡';
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    animation: flash 0.5s ease-in-out infinite;
  }
`;

// 霧のイラスト
const FogIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #D3D3D3 0%, #A9A9A9 100%);
  
  &::before {
    content: '🌫️';
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    animation: fade 3s ease-in-out infinite;
  }
  
  @keyframes fade {
    0%, 100% { opacity: 0.5; }
    50% { opacity: 1; }
  }
`;

// 霜のイラスト
const FrostIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #F0F8FF 0%, #E6E6FA 100%);
  
  &::before {
    content: '❄️';
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
  }
`;

// 数字のイラスト
const NumberIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFD700 0%, #FFA500 100%);
  
  &::before {
    content: '🔢';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 火のイラスト
const FireIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FF4500 0%, #FF6347 100%);
  
  &::before {
    content: '🔥';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 金のイラスト
const GoldIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFD700 0%, #B8860B 100%);
  
  &::before {
    content: '🥇';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 土のイラスト
const EarthIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #8B4513 0%, #A0522D 100%);
  
  &::before {
    content: '🌍';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 人のイラスト
const PersonIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '👤';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 子供のイラスト
const ChildIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFB6C1 0%, #FFC0CB 100%);
  
  &::before {
    content: '👶';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 男性のイラスト
const ManIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #4169E1 0%, #87CEEB 100%);
  
  &::before {
    content: '👨';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 女性のイラスト
const WomanIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FF69B4 0%, #FFB6C1 100%);
  
  &::before {
    content: '👩';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 口のイラスト
const MouthIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFB6C1 0%, #FFC0CB 100%);
  
  &::before {
    content: '👄';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 目のイラスト
const EyeIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '👁️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 手のイラスト
const HandIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFB6C1 0%, #FFC0CB 100%);
  
  &::before {
    content: '✋';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 足のイラスト
const FootIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #8B4513 0%, #A0522D 100%);
  
  &::before {
    content: '🦶';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 上向きのイラスト
const UpIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '⬆️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 下向きのイラスト
const DownIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '⬇️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 左向きのイラスト
const LeftIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '⬅️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 右向きのイラスト
const RightIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '➡️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 大きいのイラスト
const BigIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FF6347 0%, #FF4500 100%);
  
  &::before {
    content: '🔍';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 小さいのイラスト
const SmallIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #98FB98 0%, #90EE90 100%);
  
  &::before {
    content: '🔍';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
  }
`;

// 雨のイラスト
const RainIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #696969 0%, #2F4F4F 100%);
  
  &::before {
    content: '🌧️';
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 40px;
    animation: rain 2s linear infinite;
  }
  
  @keyframes rain {
    0% { transform: translateX(-50%) translateY(-20px); opacity: 0; }
    10% { opacity: 1; }
    90% { opacity: 1; }
    100% { transform: translateX(-50%) translateY(100px); opacity: 0; }
  }
`;

// 犬のイラスト
const DogIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '🐕';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 魚のイラスト
const FishIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #4682B4 100%);
  
  &::before {
    content: '🐟';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    animation: swim 3s ease-in-out infinite;
  }
  
  @keyframes swim {
    0%, 100% { transform: translate(-50%, -50%) translateX(0); }
    50% { transform: translate(-50%, -50%) translateX(10px); }
  }
`;

// 鳥のイラスト
const BirdIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '🐦';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    animation: fly 2s ease-in-out infinite;
  }
  
  @keyframes fly {
    0%, 100% { transform: translate(-50%, -50%) translateY(0); }
    50% { transform: translate(-50%, -50%) translateY(-10px); }
  }
`;

// 朝のイラスト
const MorningIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFD700 0%, #FFA500 100%);
  
  &::before {
    content: '🌅';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 昼のイラスト
const NoonIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #FFD700 100%);
  
  &::before {
    content: '☀️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 夕方のイラスト
const EveningIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FF6347 0%, #FF4500 100%);
  
  &::before {
    content: '🌇';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 夜のイラスト
const NightIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #191970 0%, #000080 100%);
  
  &::before {
    content: '🌙';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 前のイラスト
const FrontIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '➡️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 後のイラスト
const BackIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '⬅️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 家族のイラスト
const FamilyIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFB6C1 0%, #FFC0CB 100%);
  
  &::before {
    content: '👨‍👩‍👧‍👦';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
  }
`;

// 兄のイラスト
const BrotherIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #4169E1 0%, #87CEEB 100%);
  
  &::before {
    content: '👨';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 弟のイラスト
const YoungerBrotherIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #32CD32 0%, #90EE90 100%);
  
  &::before {
    content: '👦';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 姉のイラスト
const SisterIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FF69B4 0%, #FFB6C1 100%);
  
  &::before {
    content: '👩';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 妹のイラスト
const YoungerSisterIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FF1493 0%, #FFB6C1 100%);
  
  &::before {
    content: '👧';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 自分のイラスト
const MyselfIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '👤';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 赤色のイラスト
const RedIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FF0000 0%, #DC143C 100%);
  
  &::before {
    content: '🔴';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 青色のイラスト
const BlueIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #0000FF 0%, #4169E1 100%);
  
  &::before {
    content: '🔵';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 白色のイラスト
const WhiteIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFFFFF 0%, #F0F0F0 100%);
  
  &::before {
    content: '⚪';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 黒色のイラスト
const BlackIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #000000 0%, #333333 100%);
  
  &::before {
    content: '⚫';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 黄色のイラスト
const YellowIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFFF00 0%, #FFD700 100%);
  
  &::before {
    content: '🟡';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 緑色のイラスト
const GreenIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #00FF00 0%, #32CD32 100%);
  
  &::before {
    content: '🟢';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 春のイラスト
const SpringIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #98FB98 0%, #90EE90 100%);
  
  &::before {
    content: '🌸';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 夏のイラスト
const SummerIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #FFD700 100%);
  
  &::before {
    content: '☀️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 秋のイラスト
const AutumnIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FF6347 0%, #FFA500 100%);
  
  &::before {
    content: '🍂';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 冬のイラスト
const WinterIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #F0F8FF 0%, #E6E6FA 100%);
  
  &::before {
    content: '❄️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 天のイラスト
const HeavenIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '☁️';
    position: absolute;
    top: 30px;
    left: 30%;
    font-size: 30px;
    animation: float 3s ease-in-out infinite;
  }
  
  &::after {
    content: '☁️';
    position: absolute;
    top: 50px;
    right: 30%;
    font-size: 25px;
    animation: float 3s ease-in-out infinite 1.5s;
  }
`;

// 風のイラスト
const WindIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '💨';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    animation: blow 2s ease-in-out infinite;
  }
  
  @keyframes blow {
    0%, 100% { transform: translate(-50%, -50%) scale(1); }
    50% { transform: translate(-50%, -50%) scale(1.2); }
  }
`;

// 湖のイラスト
const LakeIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #4682B4 100%);
  
  &::before {
    content: '🏞️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 池のイラスト
const PondIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #4682B4 100%);
  
  &::before {
    content: '🪷';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 馬のイラスト
const HorseIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '🐴';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 虫のイラスト
const InsectIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #98FB98 0%, #90EE90 100%);
  
  &::before {
    content: '🐛';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    animation: crawl 3s ease-in-out infinite;
  }
  
  @keyframes crawl {
    0%, 100% { transform: translate(-50%, -50%) translateX(0); }
    50% { transform: translate(-50%, -50%) translateX(10px); }
  }
`;

// 料理のイラスト
const CookingIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FF6347 0%, #FF4500 100%);
  
  &::before {
    content: '🍳';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 米のイラスト
const RiceIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #F5DEB3 0%, #DEB887 100%);
  
  &::before {
    content: '🍚';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 酒のイラスト
const SakeIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFD700 0%, #FFA500 100%);
  
  &::before {
    content: '🍶';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 味のイラスト
const TasteIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFB6C1 0%, #FFC0CB 100%);
  
  &::before {
    content: '👅';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 国のイラスト
const CountryIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '🌍';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 市のイラスト
const CityIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #696969 0%, #2F4F4F 100%);
  
  &::before {
    content: '🏙️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 店のイラスト
const ShopIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFD700 0%, #FFA500 100%);
  
  &::before {
    content: '🏪';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 駅のイラスト
const StationIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #696969 0%, #2F4F4F 100%);
  
  &::before {
    content: '🚉';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 病院のイラスト
const HospitalIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFFFFF 0%, #F0F0F0 100%);
  
  &::before {
    content: '🏥';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 公園のイラスト
const ParkIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #98FB98 0%, #90EE90 100%);
  
  &::before {
    content: '🌳';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 勉強のイラスト
const StudyIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '📚';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 宿題のイラスト
const HomeworkIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFB6C1 0%, #FFC0CB 100%);
  
  &::before {
    content: '📝';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 質問のイラスト
const QuestionIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFD700 0%, #FFA500 100%);
  
  &::before {
    content: '❓';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 試験のイラスト
const ExamIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FF6347 0%, #FF4500 100%);
  
  &::before {
    content: '📋';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 漢字のイラスト
const KanjiIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #8B4513 0%, #A0522D 100%);
  
  &::before {
    content: '🈳';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 英語のイラスト
const EnglishIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #4169E1 0%, #87CEEB 100%);
  
  &::before {
    content: '🇺🇸';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 運動のイラスト
const ExerciseIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #32CD32 0%, #90EE90 100%);
  
  &::before {
    content: '🏃';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    animation: run 2s ease-in-out infinite;
  }
  
  @keyframes run {
    0%, 100% { transform: translate(-50%, -50%) translateX(0); }
    50% { transform: translate(-50%, -50%) translateX(10px); }
  }
`;

// 泳ぐのイラスト
const SwimIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #4682B4 100%);
  
  &::before {
    content: '🏊';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    animation: swim 2s ease-in-out infinite;
  }
  
  @keyframes swim {
    0%, 100% { transform: translate(-50%, -50%) translateY(0); }
    50% { transform: translate(-50%, -50%) translateY(-5px); }
  }
`;

// 旅のイラスト
const TravelIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '✈️';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    animation: fly 3s ease-in-out infinite;
  }
  
  @keyframes fly {
    0%, 100% { transform: translate(-50%, -50%) translateX(0); }
    50% { transform: translate(-50%, -50%) translateX(15px); }
  }
`;

// 世界のイラスト
const WorldIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #87CEEB 0%, #E0F6FF 100%);
  
  &::before {
    content: '🌍';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    animation: rotate 4s linear infinite;
  }
  
  @keyframes rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }
`;

// 練習のイラスト
const PracticeIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FFD700 0%, #FFA500 100%);
  
  &::before {
    content: '🎯';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

// 歌のイラスト
const SongIllustration = styled(BaseIllustration)`
  background: linear-gradient(to bottom, #FF69B4 0%, #FFB6C1 100%);
  
  &::before {
    content: '🎤';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
  }
`;

interface IllustrationProps {
  imageType: string;
}

const Illustration: React.FC<IllustrationProps> = ({ imageType }) => {
  const renderIllustration = () => {
    switch (imageType) {
      case 'mountain':
        return <MountainIllustration />;
      case 'river':
        return <RiverIllustration />;
      case 'flower':
        return <FlowerIllustration />;
      case 'tree':
        return <TreeIllustration />;
      case 'water':
        return <WaterIllustration />;
      case 'sun':
        return <SunIllustration />;
      case 'star':
        return <StarIllustration />;
      case 'moon':
        return <MoonIllustration />;
      case 'cloud':
        return <CloudIllustration />;
      case 'sea':
        return <SeaIllustration />;
      case 'forest':
        return <ForestIllustration />;
      case 'sky':
        return <SkyIllustration />;
      case 'storm':
        return <StormIllustration />;
      case 'rainbow':
        return <RainbowIllustration />;
      case 'snow':
        return <SnowIllustration />;
      case 'thunder':
        return <ThunderIllustration />;
      case 'fog':
        return <FogIllustration />;
      case 'frost':
        return <FrostIllustration />;
      case 'number':
        return <NumberIllustration />;
      case 'fire':
        return <FireIllustration />;
      case 'gold':
        return <GoldIllustration />;
      case 'earth':
        return <EarthIllustration />;
      case 'person':
        return <PersonIllustration />;
      case 'child':
        return <ChildIllustration />;
      case 'man':
        return <ManIllustration />;
      case 'woman':
        return <WomanIllustration />;
      case 'mouth':
        return <MouthIllustration />;
      case 'eye':
        return <EyeIllustration />;
      case 'hand':
        return <HandIllustration />;
      case 'foot':
        return <FootIllustration />;
      case 'up':
        return <UpIllustration />;
      case 'down':
        return <DownIllustration />;
      case 'left':
        return <LeftIllustration />;
      case 'right':
        return <RightIllustration />;
      case 'big':
        return <BigIllustration />;
      case 'small':
        return <SmallIllustration />;
      case 'rain':
        return <RainIllustration />;
      case 'dog':
        return <DogIllustration />;
      case 'fish':
        return <FishIllustration />;
      case 'bird':
        return <BirdIllustration />;
      case 'morning':
        return <MorningIllustration />;
      case 'noon':
        return <NoonIllustration />;
      case 'evening':
        return <EveningIllustration />;
      case 'night':
        return <NightIllustration />;
      case 'front':
        return <FrontIllustration />;
      case 'back':
        return <BackIllustration />;
      case 'family':
        return <FamilyIllustration />;
      case 'brother':
        return <BrotherIllustration />;
      case 'younger_brother':
        return <YoungerBrotherIllustration />;
      case 'sister':
        return <SisterIllustration />;
      case 'younger_sister':
        return <YoungerSisterIllustration />;
      case 'myself':
        return <MyselfIllustration />;
      case 'red':
        return <RedIllustration />;
      case 'blue':
        return <BlueIllustration />;
      case 'white':
        return <WhiteIllustration />;
      case 'black':
        return <BlackIllustration />;
      case 'yellow':
        return <YellowIllustration />;
      case 'green':
        return <GreenIllustration />;
      case 'spring':
        return <SpringIllustration />;
      case 'summer':
        return <SummerIllustration />;
      case 'autumn':
        return <AutumnIllustration />;
      case 'winter':
        return <WinterIllustration />;
      case 'heaven':
        return <HeavenIllustration />;
      case 'wind':
        return <WindIllustration />;
      case 'lake':
        return <LakeIllustration />;
      case 'pond':
        return <PondIllustration />;
      case 'horse':
        return <HorseIllustration />;
      case 'insect':
        return <InsectIllustration />;
      case 'cooking':
        return <CookingIllustration />;
      case 'rice':
        return <RiceIllustration />;
      case 'sake':
        return <SakeIllustration />;
      case 'taste':
        return <TasteIllustration />;
      case 'country':
        return <CountryIllustration />;
      case 'city':
        return <CityIllustration />;
      case 'shop':
        return <ShopIllustration />;
      case 'station':
        return <StationIllustration />;
      case 'hospital':
        return <HospitalIllustration />;
      case 'park':
        return <ParkIllustration />;
      case 'study':
        return <StudyIllustration />;
      case 'homework':
        return <HomeworkIllustration />;
      case 'question':
        return <QuestionIllustration />;
      case 'exam':
        return <ExamIllustration />;
      case 'kanji':
        return <KanjiIllustration />;
      case 'english':
        return <EnglishIllustration />;
      case 'exercise':
        return <ExerciseIllustration />;
      case 'swim':
        return <SwimIllustration />;
      case 'travel':
        return <TravelIllustration />;
      case 'world':
        return <WorldIllustration />;
      case 'practice':
        return <PracticeIllustration />;
      case 'song':
        return <SongIllustration />;
      default:
        return <MountainIllustration />;
    }
  };

  return (
    <IllustrationContainer>
      {renderIllustration()}
    </IllustrationContainer>
  );
};

export default Illustration;
