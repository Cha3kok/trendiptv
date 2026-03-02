"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MonitorPlay, Flame, Smartphone, Apple, Download, Settings, Play } from "lucide-react"

const tabs = [
  {
    id: "smart-tv",
    label: "Smart TV",
    icon: MonitorPlay,
    steps: [
      {
        icon: Download,
        title: "Download IPTV Player App",
        description: "Open your Smart TV app store and install IPTV Smarters Pro, TiviMate, or any compatible IPTV player for your IPTV Trends subscription.",
      },
      {
        icon: Settings,
        title: "Enter IPTV Trends Login",
        description: "Open the IPTV player and enter the Xtream Codes login credentials we send via WhatsApp after you buy your IPTV Trends subscription.",
      },
      {
        icon: Play,
        title: "Start Watching IPTV",
        description: "Browse 21,000+ IPTV channels, pick your favorite sports, movies, or series, and enjoy buffer-free 4K IPTV streaming.",
      },
    ],
  },
  {
    id: "firestick",
    label: "Firestick",
    icon: Flame,
    steps: [
      {
        icon: Download,
        title: "Install IPTV on Firestick",
        description: "Go to Firestick settings, enable 'Apps from Unknown Sources', then install the Downloader app to sideload your IPTV Trends player.",
      },
      {
        icon: Settings,
        title: "Configure IPTV Trends",
        description: "Use the Downloader app to install IPTV Smarters Pro. Enter the IPTV Trends credentials we provide after purchase.",
      },
      {
        icon: Play,
        title: "Stream IPTV on Firestick",
        description: "Launch the app and start streaming all 21,000+ IPTV Trends channels and VOD content on your Firestick instantly.",
      },
    ],
  },
  {
    id: "android",
    label: "Android / MAG",
    icon: Smartphone,
    steps: [
      {
        icon: Download,
        title: "Download Android IPTV App",
        description: "Install IPTV Smarters Pro or TiviMate from the Google Play Store on your Android device, tablet, or MAG box for IPTV Trends.",
      },
      {
        icon: Settings,
        title: "Add IPTV Trends Playlist",
        description: "Open the IPTV app and add your M3U URL or Xtream Codes login that IPTV Trends provides after your subscription purchase.",
      },
      {
        icon: Play,
        title: "Stream IPTV on Android",
        description: "All IPTV Trends channels and VOD content load automatically. Enjoy lag-free 4K IPTV streaming on Android.",
      },
    ],
  },
  {
    id: "apple",
    label: "Apple / iOS",
    icon: Apple,
    steps: [
      {
        icon: Download,
        title: "Get IPTV App for iOS",
        description: "Download IPTV Smarters or GSE Smart IPTV from the Apple App Store on your iPhone, iPad, or Apple TV to use IPTV Trends.",
      },
      {
        icon: Settings,
        title: "Login to IPTV Trends",
        description: "Open the IPTV app and enter the Xtream Codes API login details provided after your IPTV Trends subscription purchase.",
      },
      {
        icon: Play,
        title: "Watch IPTV on Apple Devices",
        description: "Stream IPTV Trends on the go with your Apple device. All 21,000+ IPTV channels and 65,000+ VOD titles at your fingertips.",
      },
    ],
  },
]

export default function InstallationTabs() {
  const [activeTab, setActiveTab] = useState("smart-tv")
  const activeData = tabs.find((t) => t.id === activeTab)!

  return (
    <section className="relative px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            How to Set Up <span className="text-primary">IPTV Trends</span> on Any Device
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Install IPTV Trends in 3 easy steps on Smart TV, Firestick, Android, iOS, or MAG Box. No technical skills needed. Our IPTV setup guide works for IPTV Smarters, TiviMate, and all popular IPTV players.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "neon-glow bg-primary text-primary-foreground"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-10 grid gap-6 md:grid-cols-3"
          >
            {activeData.steps.map((step, index) => (
              <div key={step.title} className="glass relative rounded-2xl p-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                    {index + 1}
                  </span>
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
