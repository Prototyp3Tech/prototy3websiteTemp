import { useState } from "react";
import rocketTop from "../assets/svgs/rocketTop.svg";
import rocketMid1 from "../assets/svgs/rocketmid1.svg";
import rocketMid2 from "../assets/svgs/rocketmid2.svg";
import rocketBottom from "../assets/svgs/rocketbottom.svg";
import rocketThruster from "../assets/svgs/rocketThruster.svg";

const AboutSection: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const rocketSteps = [
    {
      step: 1,
      title: "Step 01",
      description: "Build for students,\nby people who get it.",
      rocketParts: { top: true, mid1: true, mid2: true, bottom: true },
      isStep1: true,
    },
    {
      step: 2,
      title: "Step 02",
      description:
        "**1. Access for all**\nNo rejections. No fees. Just a door open to any student willing to learn, build, and grow.",
      rocketParts: { top: true, mid1: true, mid2: true, bottom: true },
      isStep2: true,
    },
    {
      step: 3,
      title: "Step 03",
      description:
        "**2. Learn by doing**\nWe believe real growth comes through\nhands-on, messy, yet meaningful\nprojects, just like the real world.",
      rocketParts: { top: true, mid1: true, mid2: true, bottom: true },
      isStep3: true,
    },
    {
      step: 4,
      title: "Step 04",
      description:
        "**3. Grow together**\nCommunity is our foundation. We value feedback, teamwork, and shared learning.",
      rocketParts: { top: true, mid1: true, mid2: true, bottom: true },
      isStep4: true,
    },
    {
      step: 5,
      title: "Step 05",
      description: "Prototyp3 is fueled by these 3 core pillars",
      rocketParts: { top: true, mid1: true, mid2: true, bottom: true },
      isLaunching: true,
    },
  ];

  const nextStep = () =>
    currentStep < totalSteps && setCurrentStep((s) => s + 1);
  const prevStep = () =>
    currentStep > 1 && setCurrentStep((s) => s - 1);

  const currentRocketStep = rocketSteps[currentStep - 1];

  const renderDescription = (text: string) =>
    text.split("\n").map((line, i) => (
      <div key={i}>
        {line.startsWith("**") && line.endsWith("**") ? (
          <strong>{line.replace(/\*\*/g, "")}</strong>
        ) : (
          line
        )}
      </div>
    ));

  return (
    <section className="about-section w-full" id="about">
      <div className="w-full flex justify-center">
        <div className="about-content max-w-8xl w-full px-4">
          <div className="about-text text-center">
            {/* <h2 className="section-title">The humans behind Prototyp3</h2> */}

            <div className="rocket-animation-container overflow-visible">

              <div className="rocket-step-card">
                {/* STEP 1 — bubble above entire rocket */}
                {currentRocketStep.isStep1 && (
                  <div className="step1-content">
                    <div className="step-description step1-bubble">
                      {renderDescription(currentRocketStep.description)}
                      <div className="rocket-navigation step1-navigation">
                        <button
                          onClick={prevStep}
                          disabled={currentStep === 1}
                          className="nav-btn prev-btn bg-white text-black px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:px-6 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
                          aria-label="Previous"
                        >
                          <span className="transition-all duration-300">
                            <span className="hover:hidden">←</span>
                            <span className="hidden hover:inline">{' ← '}</span>
                          </span>
                        </button>
                        <button
                          onClick={nextStep}
                          className="nav-btn next-btn bg-black text-white px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:px-6 hover:bg-orange-500 hover:shadow-lg hover:-translate-y-0.5"
                          aria-label="Next"
                        >
                          <span className="transition-all duration-300">
                            <span className="hover:hidden">→</span>
                            <span className="hidden hover:inline">{' → '}</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* ROCKET STACK (conditionally widen for steps 2/3/4) */}
                <div
                  className={`rocket-container ${
                    currentRocketStep.isStep2 ? "step2-active" : ""
                  } ${currentRocketStep.isStep3 ? "step3-active" : ""} ${
                    currentRocketStep.isStep4 ? "step4-active" : ""
                  }`}
                >
                  {/* Top always first */}
                  {currentRocketStep.rocketParts.top && (
                    <img
                      src={rocketTop}
                      alt="Rocket Top"
                      className={`rocket-part rocket-top ${
                        currentRocketStep.isLaunching ? "launching" : ""
                      }`}
                    />
                  )}

                  {/* STEP 2 — bubble directly under top */}
                  {currentRocketStep.isStep2 && (
                    <div className="step2-content">
                      <div className="step-description step2-bubble">
                        {renderDescription(currentRocketStep.description)}
                        <div className="rocket-navigation step2-navigation">
                          <button
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className="nav-btn prev-btn bg-white text-black px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:px-6 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
                            aria-label="Previous"
                          >
                            <span className="transition-all duration-300">
                              <span className="hover:hidden">←</span>
                              <span className="hidden hover:inline">{' ← '}</span>
                            </span>
                          </button>
                          <button
                            onClick={nextStep}
                            className="nav-btn next-btn bg-black text-white px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:px-6 hover:bg-orange-500 hover:shadow-lg hover:-translate-y-0.5"
                            aria-label="Next"
                          >
                            <span className="transition-all duration-300">
                              <span className="hover:hidden">→</span>
                              <span className="hidden hover:inline">{' → '}</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mid1 */}
                  {currentRocketStep.rocketParts.mid1 && (
                    <img
                      src={rocketMid1}
                      alt="Rocket Mid 1"
                      className={`rocket-part rocket-mid1 ${
                        currentRocketStep.isLaunching ? "launching" : ""
                      } ${
                        currentRocketStep.isStep2 ? "darker-part" : ""
                      }`}
                    />
                  )}

                  {/* STEP 3 — bubble after mid1, before mid2 */}
                  {currentRocketStep.isStep3 && (
                    <div className="step3-content">
                      <div className="step-description step3-bubble">
                        {renderDescription(currentRocketStep.description)}
                        <div className="rocket-navigation step3-navigation">
                          <button
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className="nav-btn prev-btn group bg-white text-black px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:px-6 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
                            aria-label="Previous"
                          >
                            <span className="transition-all duration-300">
                              <span className="group-hover:hidden">←</span>
                              <span className="hidden group-hover:inline">{' ← '}</span>
                            </span>
                          </button>
                          <button
                            onClick={nextStep}
                            className="nav-btn next-btn group bg-black text-white px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:px-6 hover:bg-orange-500 hover:shadow-lg hover:-translate-y-0.5"
                            aria-label="Next"
                          >
                            <span className="transition-all duration-300">
                              <span className="group-hover:hidden">→</span>
                              <span className="hidden group-hover:inline">{' → '}</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mid2 */}
                  {currentRocketStep.rocketParts.mid2 && (
                    <img
                      src={rocketMid2}
                      alt="Rocket Mid 2"
                      className={`rocket-part rocket-mid2 ${
                        currentRocketStep.isLaunching ? "launching" : ""
                      } ${
                        currentRocketStep.isStep2 || currentRocketStep.isStep3 ? "darker-part" : ""
                      }`}
                    />
                  )}

                  {/* ✅ STEP 4 — bubble after mid2, before bottom */}
                  {currentRocketStep.isStep4 && (
                    <div className="step4-content">
                      <div className="step-description step4-bubble">
                        {renderDescription(currentRocketStep.description)}
                        <div className="rocket-navigation step4-navigation">
                          <button
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className="nav-btn prev-btn group bg-white text-black px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:px-6 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
                            aria-label="Previous"
                          >
                            <span className="transition-all duration-300">
                              <span className="group-hover:hidden">←</span>
                              <span className="hidden group-hover:inline">{' ← '}</span>
                            </span>
                          </button>
                          <button
                            onClick={nextStep}
                            className="nav-btn next-btn group bg-black text-white px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:px-6 hover:bg-orange-500 hover:shadow-lg hover:-translate-y-0.5"
                            aria-label="Next"
                          >
                            <span className="transition-all duration-300">
                              <span className="group-hover:hidden">→</span>
                              <span className="hidden group-hover:inline">{' → '}</span>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bottom piece always last */}
                  {currentRocketStep.rocketParts.bottom && (
                    <img
                      src={currentRocketStep.isLaunching ? rocketThruster : rocketBottom}
                      alt={currentRocketStep.isLaunching ? "Rocket Thruster" : "Rocket Bottom"}
                      className={`rocket-part rocket-bottom ${
                        currentRocketStep.isLaunching ? "launching" : ""
                      } ${
                        currentRocketStep.isStep2 ||
                        currentRocketStep.isStep3 ||
                        currentRocketStep.isStep4
                          ? "darker-part"
                          : ""
                      }`}
                    />
                  )}
                </div>

                {/* Generic (Step 5) */}
                {!currentRocketStep.isStep1 &&
                  !currentRocketStep.isStep2 &&
                  !currentRocketStep.isStep3 &&
                  !currentRocketStep.isStep4 && (
                    <>
                      <div className="step-description">
                        {renderDescription(currentRocketStep.description)}
                      </div>
                      <div className="rocket-navigation">
                        <button
                          onClick={prevStep}
                          disabled={currentStep === 1}
                          className="nav-btn prev-btn group bg-white text-black px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:px-6 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed border border-gray-300"
                          aria-label="Previous"
                        >
                          <span className="transition-all duration-300">
                            <span className="group-hover:hidden">←</span>
                            <span className="hidden group-hover:inline">{' ← '}</span>
                          </span>
                        </button>
                        <button
                          onClick={() => setCurrentStep(1)}
                          className="nav-btn next-btn group bg-black text-white px-4 py-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:px-6 hover:bg-orange-500 hover:shadow-lg hover:-translate-y-0.5"
                          aria-label="Next"
                        >
                          <span className="transition-all duration-300">
                            <span className="group-hover:hidden">→</span>
                            <span className="hidden group-hover:inline">{' → '}</span>
                          </span>
                        </button>
                      </div>
                    </>
                  )}
              </div>
            </div>
            
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default AboutSection;
