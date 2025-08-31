---
layout: page
title: "LLM Optimized Closed-Loop Model Estimation"
description:
  - Developed a model estimation pipeline using GPT-3.5 (ChatGPT-o3-mini) for closed-loop identification of physical parameters of an inverted pendulum system, including masses and segment lengths. The estimated model was integrated into a Model Predictive Controller (MPC) to stabilize the system. The LLM explored a highly nonlinear parameter space, balancing exploration and exploitation to minimize the controller’s cost function. Despite not converging to true physical values, the LLM identified parameter sets that yielded superior control performance. Simulations demonstrated effective system stabilization across iterations, with visual comparisons showing improved trajectory tracking and reduced error. The approach was extended to a single pendulum setup on a UR5 robotic arm, validating the method’s adaptability and robustness.
img: assets/img/LLM-MPC-banner-small.gif
importance: 1
category: on-going
thumbnail: LLMs Generated Parameterized Policies
---
