---
title: 'minima fusion — 3機を溶かして1つの箱庭に'
summary: 'rack派生の実験機。3枠のドックに機体を挿すと、その組み合わせ専用の統合シーンが立ち上がる。全92通りを2:1アイソメの箱庭で事前生成。'
date: 2026-07-16
category: 'シリーズ連携'
color: '#ffd24d'
thumb: '/thumbs/minima-fusion.svg'
featured: false
status: '開発中'
---

## 概要

minima rackから派生した実験機。3つのドックに好きな機体を挿すと、単に並ぶのではなく、その組み合わせ専用にデザインされた1枚の統合シーンへ「溶け合い」ます。

## こだわり

- 組み合わせ92通りすべてに専用シーンを事前生成（scene-director + SCENE-CONTRACT）
- v0.3では全シーンを2:1アイソメトリックの箱庭として作り直し
- jsdomでの自動検証とElectronでのPNG/e2eテストをスクリプト化
