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
        title: "Download the App",
        description: "Open your TV's app store and search for your preferred IPTV player (e.g., IPTV Smarters, TiviMate).",
      },
      {
        icon: Settings,
        title: "Enter Your Credentials",
        description: "Open the app and enter the login details we send you via WhatsApp after purchase.",
      },
      {
        icon: Play,
        title: "Start Watching",
        description: "Browse channels, pick your favorite content, and enjoy unlimited 4K streaming.",
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
        title: "Install Downloader App",
        description: "Go to your Firestick settings, enable 'Apps from Unknown Sources', then install the Downloader app.",
      },
      {
        icon: Settings,
        title: "Download & Configure",
        description: "Use the Downloader app to install your IPTV player. Enter the credentials we provide.",
      },
      {
        icon: Play,
        title: "Enjoy Streaming",
        description: "Launch the app and start watching your favorite channels and VOD content instantly.",
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
        title: "Download IPTV Player",
        description: "Install IPTV Smarters Pro or TiviMate from the Google Play Store on your Android device or MAG box.",
      },
      {
        icon: Settings,
        title: "Add Your Playlist",
        description: "Open the app and add your M3U URL or Xtream Codes login that we provide after purchase.",
      },
      {
        icon: Play,
        title: "Stream Instantly",
        description: "All channels and VOD content will load automatically. Enjoy lag-free streaming.",
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
        title: "Get the App",
        description: "Download IPTV Smarters or GSE Smart IPTV from the Apple App Store on your iPhone, iPad, or Apple TV.",
      },
      {
        icon: Settings,
        title: "Login With Credentials",
        description: "Open the app and enter the Xtream Codes API login details provided after your purchase.",
      },
      {
        icon: Play,
        title: "Watch Anywhere",
        description: "Stream on the go with your Apple device. All 21,000+ channels at your fingertips.",
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
            Easy Setup on <span className="text-primary">Any Device</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            3 simple steps to start streaming. No technical skills required.
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
