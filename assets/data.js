/*
  Site content — edit this file to update the page.
  Publications are listed oldest first; the page shows them newest first.
  An empty "summary" still shows the student's card, with an empty summary.
*/
window.SITE = {
  "research": [
    {
      "id": "sensor-fusion",
      "title": "Sensor Fusion",
      "image": "assets/img/research/sensor-fusion.jpg",
      "lead": "Integrating data from multiple sensors to produce information more accurate and reliable than any single sensor can provide.",
      "body": "Sensor fusion leverages the strengths of different sensors while compensating for their individual limitations. In autonomous vehicles, for example, it combines cameras, radar and lidar into a detailed and accurate picture of the surroundings, enhancing safety and navigation. Kalman filters and deep learning are the well-known tools of the field, with applications across robotics, navigation, tracking, healthcare and environmental monitoring. In our lab, we focus on applications of sensor fusion in robotics and autonomous vehicles."
    },
    {
      "id": "autonomous",
      "title": "Autonomous Vehicles",
      "image": "assets/img/research/autonomous.jpg",
      "lead": "Vehicles that navigate and operate without human intervention, from perception to planning and control.",
      "body": "Using a combination of sensors such as radar, lidar and cameras, autonomous vehicles must accurately detect and respond to obstacles, pedestrians and other vehicles, and handle complex scenarios such as merging onto highways, ensuring safety in diverse and unpredictable conditions. From a modular design viewpoint, the problem breaks down into five categories: navigation, perception, prediction, planning and control."
    },
    {
      "id": "rl",
      "title": "Reinforcement Learning",
      "image": "assets/img/research/rl.jpg",
      "lead": "Agents that learn to make decisions by interacting with their environment, applied to the control of uncertain systems.",
      "body": "Beside supervised and unsupervised learning, reinforcement learning is a type of machine learning where an agent learns from rewards or penalties, maximizing its cumulative reward over time by exploring actions and learning from outcomes. This trial-and-error approach lets the agent develop optimal strategies for complex tasks. We are particularly interested in applications of RL to the control of uncertain control systems."
    },
    {
      "id": "flight",
      "title": "Flight Control Systems",
      "image": "assets/img/research/flight.jpg",
      "lead": "Guidance, navigation and control — the core of every flying vehicle, from aircraft to drones.",
      "body": "Navigation answers “where is the vehicle in the world?” by integrating sensors such as accelerometers, gyroscopes, GPS, magnetometers, vision and lidar. Guidance answers “how do we get there?”, using well-known techniques from adaptive and optimal control. The inner-loop control strategy of an aerial vehicle, the autopilot, is typically designed with nonlinear control techniques."
    },
    {
      "id": "robotics",
      "title": "Robotics",
      "image": "assets/img/research/robotics.jpg",
      "lead": "Research platforms that bridge control, perception and real-world autonomous decision-making.",
      "body": "Our laboratory is equipped with several educational and research platforms, including the JetRacer AI robotic car, Robotis Engineering Kits 1 & 2 for rapid prototyping and RL algorithm development, and Tello EDU quadrotors for aerial robotics research. We also maintain vision systems for perception, sensor fusion and real-time decision-making, and actively work on a two-joint leg control system and the Unitree Go-2 quadruped robot located in a collaborating laboratory."
    }
  ],
  "timeline": [
    {
      "years": "2009–2013",
      "title": "B.Sc. in Electrical Engineering",
      "place": "Sharif University of Technology"
    },
    {
      "years": "2013–2015",
      "title": "M.Sc. in Electrical Engineering",
      "place": "Sharif University of Technology"
    },
    {
      "years": "2015–2019",
      "title": "Ph.D. in Electrical Engineering",
      "place": "Sharif University of Technology"
    },
    {
      "years": "2020–2022",
      "title": "Postdoctoral Researcher",
      "place": "Granted by Iran National Science Foundation (INSF)"
    },
    {
      "years": "2023–now",
      "title": "Assistant Professor",
      "place": "Department of Electrical Engineering, Sharif University of Technology"
    }
  ],
  "courses": {
    "undergraduate": [
      {
        "name": "Introduction to Electrical Engineering",
        "code": "25720"
      },
      {
        "name": "Linear Control Systems",
        "code": "25411"
      },
      {
        "name": "Industrial Control Systems",
        "code": "25791"
      },
      {
        "name": "Digital Control Systems",
        "code": "Khatam University"
      },
      {
        "name": "Linear Control Systems Lab",
        "code": "25403",
        "lab": true
      },
      {
        "name": "Precision Instruments Lab",
        "code": "25404",
        "lab": true
      },
      {
        "name": "Simulation in Control Lab",
        "code": "25009",
        "lab": true
      }
    ],
    "graduate": [
      {
        "name": "Optimal Control",
        "code": "25426"
      },
      {
        "name": "Inertial Navigation",
        "code": "25442"
      }
    ]
  },
  "publications": {
    "journal": [
      {
        "authors": "B. Ahi, and A. Nobakhti",
        "title": "Hardware implementation of an ADRC controller on a gimbal mechanism",
        "venue": "IEEE Transactions on Control Systems Technology",
        "details": "vol. 26, pp. 2268-2275",
        "year": 2017
      },
      {
        "authors": "B. Ahi, and M. Haeri",
        "title": "Linear active disturbance rejection control from the practical aspects",
        "venue": "IEEE/ASME Transactions on Mechatronics",
        "details": "vol. 23, pp. 2909-2919",
        "year": 2018
      },
      {
        "authors": "S. Amini, B. Ahi, and M. Haeri",
        "title": "Control of high order integrator chain systems subjected to disturbance and saturated control: A New Adaptive Scheme",
        "venue": "Automatica",
        "details": "vol. 100, pp. 108-113",
        "year": 2019
      },
      {
        "authors": "S. Adelipour, B. Ahi, and M. Haeri",
        "title": "Dual-mode global stabilization of high-order saturated integrator chains: LMI-based MPC combined with a nested saturated feedback",
        "venue": "Nonlinear Dynamics",
        "details": "vol. 102, pp. 211-222",
        "year": 2020
      },
      {
        "authors": "B. Ahi, and M. Haeri",
        "title": "A high-performance guidance filter scheme with exact dynamic modeling of a pitch-yaw gimballed seeker mechanism",
        "venue": "Mechanical Systems and Signal Processing",
        "details": "vol. 144, p. 106857",
        "year": 2020
      },
      {
        "authors": "B. Ahi, and M. Haeri",
        "title": "Novel command to line of sight guidance with practical limitations",
        "venue": "Asian Journal of Control",
        "details": "vol. 24, pp. 1426-1436",
        "year": 2022
      },
      {
        "authors": "B. Ahi, and M. Haeri",
        "title": "Practical distributed maneuvering target tracking using delayed information of heterogeneous unregistered sensors",
        "venue": "Signal Processing",
        "details": "vol. 193, p. 108419",
        "year": 2022
      },
      {
        "authors": "A. Chitsaz, A. Naghash, F. Saberi, and B. Ahi",
        "title": "Integration of seeker filter, guidance and control for exact high-velocity target interception",
        "venue": "Scientific Reports",
        "details": "vol. 15, p. 41060",
        "year": 2025
      },
      {
        "authors": "B. Ahi",
        "title": "MEMS gyroscope technology in defence systems: An application-oriented perspective with new analytical results",
        "venue": "Defence Technology",
        "details": "vol. 55, pp. 389-406",
        "year": 2026
      },
      {
        "authors": "B. Ahi",
        "title": "Ground radar-aided INS–GNSS localization under registration biases: A near-CRLB performance",
        "venue": "Measurement",
        "details": "vol. 269, p. 120728",
        "year": 2026
      },
      {
        "authors": "S. R. Hosseini, S. Adelipour, B. Ahi, M. Haeri, and M.R. Aref",
        "title": "Privacy-preserving distributed aggregative optimization for multi-agent systems: A secure multi-party computation framework",
        "venue": "Information Sciences",
        "details": "vol. 756, pp. 1-16",
        "year": 2026
      }
    ],
    "conference": [
      {
        "authors": "S. Amini, B. Ahi, and M. Haeri",
        "title": "Nested saturation control based on the extended state observer: Twin rotor MIMO system",
        "venue": "5th International Conference on Control, Instrumentation, and Automation (ICCIA)",
        "details": "Shiraz, Iran, pp. 55-59",
        "year": 2017
      },
      {
        "authors": "B. Ahi, and M. Haeri",
        "title": "Novel nested saturated feedback scheme for CLOS guidance via cubature Kalman filter",
        "venue": "25th International Conference on Integrated Navigation Systems (ICINS)",
        "details": "Saint Petersburg, Russia, pp. 55-59",
        "year": 2018
      },
      {
        "authors": "B. Ahi, and M. Haeri",
        "title": "Active disturbance rejection control versus robust adaptive sliding mode: Case study of variable-length pendulum",
        "venue": "20th Russian Conference of Young Scientists “Navigation and Motion Control”",
        "details": "Saint Petersburg, Russia, pp. 47-49",
        "year": 2018
      },
      {
        "authors": "B. Ahi, S. Adelipour, and M. Haeri",
        "title": "A dual mode control scheme for global stabilization of multiple integrators subjected to disturbance and bounded input",
        "venue": "21th Russian Conference of Young Scientists “Navigation and Motion Control”",
        "details": "Saint Petersburg, Russia, pp. 288-290",
        "year": 2019
      },
      {
        "authors": "M. Gilak, R. Mehraban, B. Ahi, and MS. Tavazoei",
        "title": "Model-free inverse optimal control based on dynamic linearization",
        "venue": "11th International Conference on Control, Instrumentation, and Automation (ICCIA)",
        "details": "Tehran, Iran, pp. 55-59",
        "year": 2025,
        "award": "Best Paper Award"
      }
    ]
  },
  "students": {
    "phd": [
      {
        "name": "Ehsan Forootan",
        "years": "2026–2030",
        "photo": "assets/img/people/ehsan-forootan.jpg",
        "summary": "My research is focused on developing centralized and decentralized controller frameworks for complex nonlinear dynamical systems, with particular emphasis on learning-based and data-driven control. I am currently interested in combining nonlinear and optimized expert control with learning techniques such as Koopman-based lifting and neural function approximation, to learn tractable representations of unknown or partially known dynamics directly from data. These representations could then be used to design robust, adaptive, model-predictive or even Reinforcement learning-based controllers for challenging systems such as two-legged and walking robots. Ultimately, I aim to bridge learning and control theory to develop methods that retain theoretical guarantees while remaining applicable to real-world input-affine systems."
      }
    ],
    "msc": [
      {
        "name": "Alireza Esmailnezhad",
        "years": "2023–2025",
        "photo": "assets/img/people/alireza-esmailnezhad.jpg",
        "summary": "My project is to develop an integrated perception framework for autonomous vehicles that enables accurate tracking and trajectory prediction of surrounding vehicles on realistic, curved roads by fusing multi-rate sensor data (like radar and LiDAR) within the geometry of the Frenet coordinate system. It employs nonlinear Kalman filters for state estimation while simultaneously calibrating sensor biases and errors, and its key advantage is providing reliable predictions without large datasets by leveraging map information and geometric mappings instead of complex learning models. The framework was rigorously validated through extensive simulations, showing it significantly enhances the accuracy and reliability of perception systems for autonomous driving."
      },
      {
        "name": "Mohammad Faraji",
        "years": "2023–2026",
        "photo": "assets/img/people/mohammad-faraji.jpg",
        "summary": "My project is to develop an advanced AHRS (Attitude and Heading Reference System) algorithm that fuses data from a gyroscope, accelerometer, magnetometer, barometer, and GNSS to achieve accurate and robust platform navigation. The primary challenge addressed is mitigating the detrimental effects of acceleration disturbances on the accelerometer and magnetic interference on the magnetometer, which typically corrupt attitude and heading estimates. The algorithm will intelligently weight the reliable sensors during these disturbance periods to provide a stable and precise orientation solution, ensuring dependable navigation in dynamically changing and magnetically disturbed environments."
      },
      {
        "name": "Mohammad Reza Gilak",
        "years": "2024–2026",
        "photo": "assets/img/people/mohammadreza-gilak.jpg",
        "summary": "My project is to advance the previous control system research for a two-joint leg mechanism by implementing and validating the developed algorithms on the Unitree B1 robot. This continuation aims to transition the control strategies from simulation to a sophisticated, real-world quadrupedal platform, tackling the practical challenges of dynamic locomotion, balance, and interaction with uneven terrain. The primary focus will be on adapting the control framework to manage the increased complexity of coordinating four legs and ensuring stable, robust performance under dynamic conditions and external disturbances. Successfully demonstrating this on the B1 robot will prove the scalability and practical effectiveness of the proposed control methods for advanced legged robotic systems."
      },
      {
        "name": "Alireza Faghih",
        "years": "2024–2027",
        "photo": "assets/img/people/alireza-faghih.jpg",
        "summary": "My project is to develop a robust, vision-based hovering system for a quadrotor drone to maintain precise positional stability in indoor environments where GNSS signals are unavailable. Using a downward-facing camera and advanced computer vision algorithms, the system calculates the drone's displacement by tracking natural ground features and fuses this data with inertial measurements to correct for sensor drift. The key challenge is ensuring reliable performance in real-world indoor conditions with variable lighting, low-texture floors, and potential moving obstacles, with the goal of achieving centimeter-level positioning accuracy without any pre-installed markers or artificial aids in the environment."
      },
      {
        "name": "Omid Keshavarz",
        "years": "2025–2027",
        "photo": "assets/img/people/omid-keshavarz.jpg",
        "summary": "This research aims to design and implement an advanced Active Disturbance Rejection Control (ADRC) scheme based on a Cascade Extended State Observer (CESO) to mitigate control signal oscillations by filtering sensor noise in the first layer while achieving high-accuracy disturbance estimation in subsequent layers without sacrificing estimation speed. In this framework, closed-loop system stability is analyzed and proven based on observer error dynamics, dispensing with the unrealistic assumption of a bounded time derivative for total disturbance. Following simulation and comparative evaluation against conventional linear ADRC, the proposed algorithm will be implemented on a physical platform,focusing on vehicle longitudinal control within an Adaptive Cruise Control (ACC) system. Finally, the feasibility of integrating this architecture with reinforcement learning algorithms for intelligent and adaptive parameter tuning is investigated."
      },
      {
        "name": "Mohammad Hadi Ghadam",
        "years": "2025–2027",
        "photo": "assets/img/people/mohammad-hadi-ghadam.jpg",
        "summary": "My work focuses on visual odometry for estimating the motion and trajectory of a robotic system from a sequence of camera images. Particular attention is given to monocular visual odometry, which offers a simpler and more flexible sensing setup compared with stereo systems; Although stereo cameras can provide direct depth information, their ability to estimate depth decreases as the distance to observed objects increases, causing the geometry to approach the monocular case at long ranges. A fundamental challenge in monocular visual odometry is scale ambiguity, since the true metric scale of the estimated trajectory cannot be determined from images alone. The project therefore investigates the principles and challenges of monocular visual odometry, with emphasis on reliable motion estimation and the importance of resolving or compensating for scale ambiguity in robotic applications."
      },
      {
        "name": "Fatemeh Rahideh",
        "years": "2025–2027",
        "photo": "assets/img/people/fatemeh-rahideh.jpg",
        "summary": "My project is to develop a robust contact condition estimation framework for legged robots to provide reliable contact information for improving state estimation and the stability of robot operation. The main challenge addressed is the uncertainty of contact conditions in real-world environments, where issues such as slippage, changes in friction, and sensor measurement errors can affect the accuracy of state estimation. The proposed framework aims to estimate not only the occurrence of contact but also its confidence and reliability using available robot sensor measurements. The estimated contact information will be incorporated into the state estimation process to enhance the robustness and accuracy of the overall estimation framework. The proposed method will be validated through simulation and experiments on a real legged robot platform to evaluate its performance in various scenarios."
      }
    ],
    "bsc": [
      {
        "name": "Ali Mansouri",
        "year": "2024",
        "summary": "My project investigates Extremum Seeking Control (ESC) as a real-time, model-free optimization method for nonlinear dynamic systems with unknown or time-varying behavior. After presenting the theoretical foundations and algorithmic framework of ESC, the work examines two main problems: optimizing a static nonlinear mapping and tuning feedback controller parameters in dynamic systems. Through MATLAB/Simulink simulations—including a static case and an anti-lock braking system (ABS)—the study analyzes convergence characteristics, delay effects, and parameter tuning trade-offs. The findings demonstrate the practical efficacy of ESC in achieving optimal performance under uncertainty."
      },
      {
        "name": "Amirali Pourdehghan",
        "year": "2024",
        "summary": ""
      },
      {
        "name": "Seyed Mohammad Hashemi",
        "year": "2024",
        "summary": "This project focused on the hardware implementation of a sensor fusion algorithm for an Attitude and Heading Reference System (AHRS). The system estimates the orientation of a vehicle using a gyroscope, accelerometer, and magnetometer. The main objective was to calculate the three Euler angles: roll, pitch, and yaw. The algorithm was developed by a master's student in MATLAB. My responsibility was to convert the algorithm into C code using MATLAB Coder and MATLAB Simulink. I performed the code generation process and identified and corrected conversion errors. After debugging, the generated C code was transferred to the target hardware using Keil. Finally, the system was tested by comparing the estimated angles with the actual changes in hardware orientation. This project provided practical experience in embedded systems, sensor fusion, and hardware implementation."
      },
      {
        "name": "Taha Abedini",
        "year": "2025",
        "summary": "This project presents a coarse-to-fine approach for drone localization using onboard imagery and a preloaded satellite map. The proposed system consists of two main modules. In the first module, a global image-retrieval method, inspired by VLAD-based feature aggregation, is used to compare the drone image with satellite map tiles and retrieve the most visually similar tile, providing an initial estimate of the drone’s location. In the second module, this coarse estimate is refined through local feature matching. Patch-level feature representations are extracted using a Vision Foundation Model (VFM) based on a Vision Transformer (ViT), and correlation is performed between the drone image features and the retrieved satellite tile features. By identifying the region with the highest feature correspondence, the system obtains a more precise localization of the drone within the selected satellite tile."
      },
      {
        "name": "Mohammad Mahdi Hossein Beiky",
        "year": "2025",
        "summary": "My project is to develop a robust thermal control framework for inertial measurement unit (IMU) sensors, enabling precise temperature regulation despite significant thermal inertia caused by physical heater separation. It employs Active Disturbance Rejection Control (ADRC) based on state observers to manage system lags while simultaneously mitigating parameter uncertainties and structural variations. Its key advantage is providing reliable stability where classical PID controllers fail, leveraging modern state-feedback techniques to estimate and cancel disturbances. The framework aims to validate this architecture through rigorous system identification, showing it significantly enhances control accuracy with negligible overshoot and zero steady-state error."
      },
      {
        "name": "Erfan Bateni",
        "year": "2025",
        "summary": "My project is to present a reliable motion-planning framework for autonomous driving by integrating Active Disturbance Rejection Control (ADRC) directly into the trajectory generation process. Operating within the Frenet coordinate frame to decouple lateral and longitudinal dynamics, the method generates multiple candidate paths along with their corresponding dynamically feasible speed profiles. Each candidate’s trajectory is evaluated through closed-loop ADRC simulation to ensure robustness against disturbances and adherence to vehicle dynamic constraints before the final selection is made via a multi-objective cost function. The framework rigorously establishes analytical conditions for trajectory boundedness and provides a systematic tuning procedure, demonstrating computational efficiency and reliable performance in diverse driving scenarios such as lane changing and obstacle avoidance, all without requiring a separate behavioral planner."
      },
      {
        "name": "Sadrodin Fayazi",
        "year": "2026",
        "summary": "My project is to design the longitudinal controller for a road vehicle. As the first step, we develop a detailed model of the system that captures the essential longitudinal dynamics, including the powertrain, braking system, aerodynamic drag, rolling resistance, and road grade effects. Then, an active disturbance rejection control scheme is leveraged to estimate and compensate for both internal nonlinearities and external disturbances in real time, thereby achieving accurate and robust tracking of the desired speed profile despite parameter variations, road grade changes, and unmodeled dynamics."
      },
      {
        "name": "Amirhosein Zandi",
        "year": "2026",
        "summary": "My project aims to develop and implement a novel in-field calibration procedure for 3-axis magnetometers aided by a 3-axis gyroscope. The proposed scheme aligns the sensor coordinate frames by estimating the bias vector and scale factor matrix of the magnetometer. Since the gyroscope is assumed to be already calibrated, it serves as a reliable reference for determining the orientation changes needed during the calibration process. The project covers both the theoretical formulation of the calibration algorithm and its practical implementation, including data acquisition, parameter estimation, and validation of the calibrated magnetometer performance."
      }
    ]
  },
  "links": [
    {
      "title": "Map of Control Theory",
      "type": "Image",
      "url": "files/map-of-control-theory.jpg",
      "text": "Navigate the complex landscape of system dynamics with a visual guide to the core concepts of control theory."
    },
    {
      "title": "Map of Navigation",
      "type": "Image",
      "url": "files/map-of-navigation.jpg",
      "text": "Explore the essential principles of guidance and navigation, from classical methods to modern autonomous systems."
    },
    {
      "title": "Giants of Control Theory",
      "type": "Website",
      "url": "https://www.incontrolpodcast.com/",
      "text": "Discover the brilliant minds and foundational breakthroughs that built the modern field of control engineering."
    },
    {
      "title": "Coffee and Control Podcast",
      "type": "Podcast",
      "url": "https://podcasts.apple.com/us/podcast/coffee-and-control/id1787211629",
      "text": "Grab a coffee and hear leading researchers unpack the real-world challenges and breakthroughs in control engineering today."
    },
    {
      "title": "2030 Control Road Map",
      "type": "PDF",
      "url": "files/control-roadmap-2030.pdf",
      "text": "Look ahead to the future of the discipline with a strategic roadmap of where control engineering is heading next."
    },
    {
      "title": "Control Theory in the Era of Intelligent Systems",
      "type": "PDF",
      "url": "files/control-theory-intelligent-systems-2026.pdf",
      "text": "Explore how classical control theory is converging with AI, machine learning, and cyber-physical systems in this comprehensive 2026 review."
    },
    {
      "title": "Best Journals in Control and System Engineering",
      "type": "Website",
      "url": "https://www.scimagojr.com/journalrank.php?category=2207",
      "text": "Fast-track your research by finding the top peer-reviewed publications and most influential journals in the field."
    }
  ]
};
