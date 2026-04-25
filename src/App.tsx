/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Mail, 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Briefcase, 
  Languages, 
  Award, 
  Plane,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Clock,
  Navigation,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const travelItinerary = [
    {
      day: 1,
      title: "抵達清萊 — 建立後勤基地",
      content: "抵達清萊機場 (CEI) 後，搭乘 Grab 或 CR Bus 前往市中心飯店。辦理入住，並前往「清萊第一巴士站」確認隔天車資。隨後至夜市補齊生活用品。",
      icon: <Navigation className="w-5 h-5" />,
      tag: "Day 1"
    },
    {
      day: 2,
      title: "文化洗禮 — 清萊經典巡禮",
      content: "上午造訪著名的「白廟」(Wat Rong Khun)，下午前往「藍廟」。這兩座廟宇是清萊最重要的文化地標，值得細細品味建築藝術。",
      icon: <Award className="w-5 h-5" />,
      tag: "Day 2"
    },
    {
      day: 3,
      title: "推進邊界 — 清萊 → 美塞",
      content: "上午參觀黑屋博物館，下午搭乘巴士前往泰國最北端城鎮「美塞」(Mae Sai)。這裡是泰緬邊境的重要據點，生活節奏舒適。",
      icon: <MapPin className="w-5 h-5" />,
      tag: "Day 3"
    },
    {
      day: 4,
      title: "地理實測 — 金三角區域",
      content: "前往金三角，親眼目睹泰、緬、寮三國交界。參觀鴉片博物館，了解當地歷史變遷。",
      icon: <Navigation className="w-5 h-5" />,
      tag: "Day 4"
    },
    {
      day: 5,
      title: "最後整備 — 備戰狀態",
      content: "上午在此享受寧靜時光，下午準備後續物資、兌換外幣，並確認網路訊號情況。",
      icon: <Clock className="w-5 h-5" />,
      tag: "Day 5"
    },
    {
      day: 6,
      title: "正式跨國 — 進入大其力",
      content: "08:00 抵達美塞海關辦理出境，步行跨過「友誼大橋」進入大其力。正式展開跨境旅程。",
      icon: <Plane className="w-5 h-5" />,
      tag: "Day 6"
    }
  ];

  const certifications = [
    "基本安全 (Basic Safety)",
    "滅火 (Firefighting)",
    "進階滅火 (Advanced Firefighting)",
    "保全職責 (Security Duties)",
    "保全意識 (Security Awareness)"
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Header / Hero Section */}
      <header className="relative bg-[#2D3436] text-white pt-24 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 to-transparent"></div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Profile Info Card */}
            <motion.div 
              {...fadeIn}
              className="flex-shrink-0 bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/20 shadow-2xl"
            >
              <div className="w-48 h-48 bg-emerald-500 rounded-xl flex items-center justify-center overflow-hidden">
                {/* Fallback avatar if no image */}
                <span className="text-6xl font-bold text-white">欣佩</span>
              </div>
            </motion.div>

            <div className="flex-grow text-center md:text-left">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4"
              >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">鄧欣佩 HSIN PEI</h1>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-xs font-medium text-emerald-300">獅子座 Leo</span>
                  <span className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs font-medium text-blue-300">B型 Blood B</span>
                  <span className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-xs font-medium text-orange-300">2007-07-25</span>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-slate-300 text-sm mb-8"
              >
                <a href="mailto:a111182116@nkust.edu.tw" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Mail className="w-4 h-4" /> a111182116@nkust.edu.tw
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> 高雄科技大學 航海科
                </span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center md:justify-start gap-4"
              >
                {[Linkedin, Instagram, Youtube, Facebook, Twitter].map((Icon, i) => (
                  <button key={i} className="p-2.5 rounded-full bg-white/5 hover:bg-emerald-500 transition-all duration-300 group border border-white/10">
                    <Icon className="w-5 h-5 text-slate-300 group-hover:text-white" />
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area - Overlapping with Hero */}
      <main className="max-w-5xl mx-auto px-6 -mt-16 pb-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Biography & Skills */}
          <div className="lg:col-span-2 space-y-8">
            {/* Biography */}
            <motion.section 
              {...fadeIn}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-900">
                <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                關於我 About Me
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
                您好，我是欣佩。目前就讀於國立高雄科技大學航海技術系五專四年級。我具有認真負責與獨立思考的能力。在個性方面，我做事細心謹慎，面對困難時會主動尋找解決方法並努力嘗試，不輕易放棄。也喜歡接觸新事物，藉此提升自我能力與拓展視野。能持續學習、精進專業能力，不斷充實自我。
              </div>
            </motion.section>

            {/* Experience & Education Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.section 
                {...fadeIn}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-slate-900 border-b border-slate-50 pb-4">
                  <Briefcase className="w-5 h-5 text-emerald-500" />
                  工作經歷
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-slate-900">MUMU POKE</h4>
                      <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full uppercase tracking-wider">2023 - 2025</span>
                    </div>
                    <p className="text-slate-500 text-sm">兼職 / 實習人員</p>
                  </div>
                </div>
              </motion.section>

              <motion.section 
                {...fadeIn}
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
              >
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-slate-900 border-b border-slate-50 pb-4">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  學歷
                </h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-bold text-slate-900 italic">國立高雄科技大學</h4>
                      <span className="text-xs font-medium text-slate-400 bg-slate-50 px-2.5 py-1 rounded-full uppercase tracking-wider text-right">2022.09 - 2027.06</span>
                    </div>
                    <p className="text-slate-500 text-sm underline decoration-blue-100 underline-offset-4">航海技術系 / 五專部</p>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* Travel Plan (Large Section) */}
            <motion.section 
              {...fadeIn}
              id="travel-plan"
              className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden"
            >
              <div className="p-8 bg-emerald-500/5 border-b border-slate-50">
                <h2 className="text-2xl font-bold flex items-center gap-3 text-emerald-900">
                  <Plane className="w-7 h-7" />
                  旅遊計畫：清萊 → 大其力
                </h2>
                <p className="text-emerald-700/70 text-sm mt-1 ml-10">6天跨境行動指南 (預算 NT$30,000)</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-100">
                {travelItinerary.map((item, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ backgroundColor: "rgb(249 250 251)" }}
                    className="p-8 bg-white transition-colors group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-100 group-hover:text-emerald-600 transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                            {item.tag}
                          </span>
                          <h4 className="font-bold text-slate-900">{item.title}</h4>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          {item.content}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="p-6 bg-slate-50 text-center">
                <button className="text-emerald-600 text-sm font-bold flex items-center gap-2 mx-auto hover:gap-3 transition-all">
                  查看完整攻略 <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.section>
          </div>

          {/* Right Column: Sidebar Info */}
          <div className="space-y-8">
            {/* Certifications */}
            <motion.section 
              {...fadeIn}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100"
            >
              <h3 className="text-lg font-bold mb-6 flex items-center gap-3 text-slate-900">
                <Award className="w-5 h-5 text-orange-500" />
                專業證照
              </h3>
              <ul className="space-y-3">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex items-start gap-3 group">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-sm text-slate-600 font-medium">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Simple Contact Form / Button */}
            <motion.section 
              {...fadeIn}
              className="bg-[#2D3436] p-8 rounded-3xl shadow-lg border border-slate-800 text-white text-center"
            >
              <h3 className="text-lg font-bold mb-2">準備好交流了嗎？</h3>
              <p className="text-slate-400 text-sm mb-6">歡迎與我聯繫以獲取更多資訊或合作機會。</p>
              <button 
                onClick={() => window.location.href = "mailto:a111182116@nkust.edu.tw"}
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-emerald-500/20 active:scale-95"
              >
                與我聯絡 Contact Me
              </button>
            </motion.section>

            {/* Preview Figurine placeholder or link */}
            <motion.div 
              {...fadeIn}
              className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer border-4 border-white shadow-xl"
            >
              <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
                <span className="text-slate-400 font-bold uppercase tracking-widest text-xs">個人公仔 3D Avatar</span>
              </div>
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6 text-center">
                <p className="text-xs text-white uppercase tracking-tighter">檢視自製 3D 模型作品</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-12">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-4">
          <div className="text-2xl font-black text-slate-200 tracking-tighter select-none">HSIN PEI PORTFOLIO</div>
          <div className="text-xs text-slate-400 font-medium uppercase tracking-widest">
            © 2026 HSIN PEI — Crafted for NKUST Marine Engineering
          </div>
          <div className="flex justify-center gap-6 text-slate-300">
            <span className="text-[10px]">Reference: youtube.com/linxuanyu-class</span>
            <span className="text-[10px]">Images: Freepik / Google Earth</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
