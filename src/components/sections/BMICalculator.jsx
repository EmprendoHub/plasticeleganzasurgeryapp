"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  BiCalculator,
  BiInfoCircle,
  BiTrendingUp,
  BiHeart,
  BiBrain,
} from "react-icons/bi";
import Image from "next/image";

const BMICalculator = () => {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    unit: "metric", // metric or imperial
  });
  const [result, setResult] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calculateBMI = () => {
    const { height, weight, unit } = formData;

    if (!height || !weight) return;

    let bmi;
    if (unit === "metric") {
      // height in cm, weight in kg
      const heightInMeters = parseFloat(height) / 100;
      bmi = parseFloat(weight) / (heightInMeters * heightInMeters);
    } else {
      // height in inches, weight in lbs
      const heightInInches = parseFloat(height);
      const weightInLbs = parseFloat(weight);
      bmi = (weightInLbs / (heightInInches * heightInInches)) * 703;
    }

    const category = getBMICategory(bmi);
    const recommendation = getBMIRecommendation(bmi);

    setResult({
      bmi: bmi.toFixed(1),
      category: category.name,
      categoryColor: category.color,
      recommendation,
    });
    setShowResult(true);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return { name: "Bajo peso", color: "text-blue-400" };
    if (bmi >= 18.5 && bmi < 25)
      return { name: "Peso normal", color: "text-green-400" };
    if (bmi >= 25 && bmi < 30)
      return { name: "Sobrepeso", color: "text-yellow-400" };
    return { name: "Obesidad", color: "text-red-400" };
  };

  const getBMIRecommendation = (bmi) => {
    if (bmi < 18.5) {
      return "Considera consultar con nuestros especialistas en nutrición para desarrollar un plan saludable de aumento de peso.";
    }
    if (bmi >= 18.5 && bmi < 25) {
      return "¡Excelente! Estás en el rango de peso saludable. Mantén tu estilo de vida actual con ejercicio regular y nutrición balanceada.";
    }
    if (bmi >= 25 && bmi < 30) {
      return "Considera cambios en el estilo de vida o explora nuestros procedimientos de contorno corporal para ayudar a lograr tu peso ideal.";
    }
    return "Nuestras opciones de cirugía de pérdida de peso y procedimientos de contorno corporal pueden ayudarte a lograr tus objetivos de salud y estética.";
  };

  const resetCalculator = () => {
    setFormData({
      height: "",
      weight: "",
      unit: "metric",
    });
    setResult(null);
    setShowResult(false);
  };

  return (
    <section className="py-16 sm:py-20 max-w-[1450px] w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 mx-auto">
      {/* Header */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <BiCalculator className="text-amber-400 h-8 w-8" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Calculadora de IMC
          </h2>
        </div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Calcula tu Índice de Masa Corporal para entender tu categoría de peso
          y explorar cómo nuestros procedimientos pueden ayudarte a lograr tus
          objetivos corporales ideales.
        </p>
      </motion.div>
      <div className="gap-8 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-1">
        <div className="grid grid-cols-1 gap-8">
          {/* Calculator Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <BiInfoCircle className="h-5 w-5 text-amber-400" />
              Ingresa tus Datos
            </h3>

            {/* Unit Toggle */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Unidades de Medida
              </label>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, unit: "metric" }))
                  }
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                    formData.unit === "metric"
                      ? "bg-amber-400 text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Métrico (cm/kg)
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({ ...prev, unit: "imperial" }))
                  }
                  className={`flex-1 py-2 px-4 rounded-lg font-medium transition-all duration-300 ${
                    formData.unit === "imperial"
                      ? "bg-amber-400 text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Imperial (pulg/lbs)
                </button>
              </div>
            </div>

            {/* Height Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Estatura {formData.unit === "metric" ? "(cm)" : "(pulgadas)"}
              </label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleInputChange}
                placeholder={
                  formData.unit === "metric" ? "ej., 170" : "ej., 67"
                }
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Weight Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Peso {formData.unit === "metric" ? "(kg)" : "(lbs)"}
              </label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleInputChange}
                placeholder={
                  formData.unit === "metric" ? "ej., 70" : "ej., 154"
                }
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Calculate Button */}
            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={calculateBMI}
                disabled={!formData.height || !formData.weight}
                className="flex-1 bg-gradient-to-r from-amber-400 to-amber-500 text-black font-semibold py-3 px-6 rounded-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <BiCalculator className="h-5 w-5" />
                Calcular IMC
              </motion.button>

              {showResult && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={resetCalculator}
                  className="px-6 py-3 bg-white/10 text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  Reiniciar
                </motion.button>
              )}
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            {!showResult ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <BiTrendingUp className="h-16 w-16 text-amber-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  Your BMI Result
                </h3>
                <p className="text-gray-400">
                  Ingresa tus datos para ver tu Índice de Masa Corporal y
                  obtener recomendaciones personalizadas.
                </p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                  <BiHeart className="h-5 w-5 text-amber-400" />
                  Tus Resultados
                </h3>

                {/* BMI Score */}
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-amber-400 mb-2">
                    {result.bmi}
                  </div>
                  <div
                    className={`text-lg font-medium ${result.categoryColor} mb-2`}
                  >
                    {result.category}
                  </div>
                  <div className="text-sm text-gray-400">
                    Índice de Masa Corporal
                  </div>
                </div>

                {/* BMI Scale */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs text-gray-400 mb-2">
                    <span>Bajo peso</span>
                    <span>Normal</span>
                    <span>Sobrepeso</span>
                    <span>Obesidad</span>
                  </div>
                  <div
                    className="h-2 rounded-full relative"
                    style={{
                      background:
                        "linear-gradient(to right, #60a5fa 0%, #60a5fa 25%, #4ade80 25%, #4ade80 50%, #facc15 50%, #facc15 75%, #f87171 75%, #f87171 100%)",
                    }}
                  >
                    <div
                      className="absolute top-0 w-1 h-4 bg-white rounded-full transform -translate-x-1/2 -translate-y-1"
                      style={{
                        left: `${Math.min(
                          Math.max((parseFloat(result.bmi) / 40) * 100, 0),
                          100
                        )}%`,
                      }}
                    />
                  </div>
                </div>

                {/* Recommendation */}
                <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                  <h4 className="font-semibold text-white mb-2">
                    Recomendación
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {result.recommendation}
                  </p>
                </div>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-6 bg-white/10 text-white border border-amber-400 py-3 px-6 rounded-lg hover:bg-amber-400 hover:text-black transition-all duration-300 font-medium"
                >
                  Agendar Consulta
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-start gap-8">
          {/* BMI Image */}
          <div className="relative w-full h-[492px] sm:h-80 md:h-96 rounded-lg overflow-hidden">
            <Image
              src={"/sections/BMI.webp"}
              alt="BMI Image"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          {/* BMI Information */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col items-center"
          >
            <BiBrain className="h-16 w-16 text-amber-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Entendiendo el IMC
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="text-blue-400 font-semibold">Bajo peso</div>
                <div className="text-gray-400">IMC menor a 18.5</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-semibold">Peso normal</div>
                <div className="text-gray-400">IMC 18.5-24.9</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 font-semibold">Sobrepeso</div>
                <div className="text-gray-400">IMC 25-29.9</div>
              </div>
              <div className="text-center">
                <div className="text-red-400 font-semibold">Obesidad</div>
                <div className="text-gray-400">IMC 30 y superior</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BMICalculator;
