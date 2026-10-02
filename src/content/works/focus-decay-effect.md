---
title: 'Focus Decay Effect — ピントの外を壊すVirtualLens2拡張'
summary: 'VirtualLens2で撮った写真の、ピントが合っていないところだけを壊すVRChatアバターギミック。BOOTHで販売しています。'
date: 2026-10-02
category: 'VRChatギミック'
color: '#49d8e6'
thumb: '/works/focus-decay-card.jpg'
full: '/works/focus-decay-full.jpg'
role: '企画・シェーダー/ギミック実装・説明書・販売ページ制作'
links:
  - label: 'BOOTHで見る'
    url: 'https://tanpopokoubou.booth.pm/items/8914995'
  - label: '説明書を読む'
    url: 'https://yutanpopozzz.com/focus-decay-effect/'
---

## 概要

VRChatのカメラ拡張「VirtualLens2」で撮る写真に、もう一段の表現を足すアバターギミックです。

ピントの合った被写体には一切手をつけず、**ボケている部分だけ**がグリッチしたり、垂れたり、溶けたりします。VirtualLens2が計算している被写界深度をそのまま参照しているので、F値を開けるほど、壊れる範囲が広がります。

## できること

- エフェクトは6種類。Smear / Blocks / Drip Down / Drip Across / Fluid / Glitch
- 強さ・幅・長さなど12本のダイヤルと、設定を4つまで保存できるプリセット
- プレハブを2つ入れると、2種類のエフェクトを重ねがけできる
- 同期パラメータの消費は0bit。アバターのファイルには手を加えない非破壊導入

## 制作

レタッチで後から足すのではなく、撮った瞬間にもう壊れている写真になります。

VirtualLens2の作者・ろじらぼ様に事前に相談し、配布の許可をいただいています。テスターのみなさんの作例とフィードバックを受けて、v1.0として販売を始めました。
