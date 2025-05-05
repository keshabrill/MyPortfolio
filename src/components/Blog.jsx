"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import "./Blog.css"

const Blog = () => {
  const fieldTrip = {
    title: "BSIT Educational Field Trip & Seminar (Batch 2024-2025)",
    days: [
      {
        day: "Day 1",
        title: "City Tour",
        description: "Explored Intramuros, Fort Santiago, Rizal Park, and other historical sites in Manila.",
        images: Array(1).fill("/day-one.png"),
      },
      {
        day: "Day 2",
        title: "Subic Bay",
        description: "Visited SBMA Departments and learned about their operations and management.",
        images: Array(1).fill("/day-two.png"),
      },
      {
        day: "Day 3",
        title: "Museums",
        description:
          "Toured Museo ni Manuel L. Quezon and the National Museum, exploring Philippine history and culture.",
        images: Array(1).fill("/day-three.png"),
      },
      {
        day: "Day 4",
        title: "BSP, Hytec Power, Trinoma",
        description: "Visited the Bangko Sentral ng Pilipinas, Hytec Power, and ended the day at Trinoma Mall.",
        images: Array(1).fill("/day-four.png"),
      },
      {
        day: "Day 5",
        title: "LRTA, MMDA TEC",
        description: "Toured the Light Rail Transit Authority and MMDA Traffic Engineering Center.",
        images: Array(1).fill("/day-five.png"),
      },
      {
        day: "Day 6",
        title: "Baguio City Tour",
        description: "Explored multiple destinations in Baguio City, experiencing the culture and natural beauty.",
        images: Array(1).fill("/day-six.png"),
      },
      {
        day: "Day 7",
        title: "Baguio Free Day",
        description: "Enjoyed a free day in Baguio City, exploring at our own pace and creating memories.",
        images: Array(1).fill("/day-seven.png"),
      },
    ],
  }

  const [activeDay, setActiveDay] = useState(fieldTrip.days[0].day)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedPost, setSelectedPost] = useState(null)

  const selectedDay = fieldTrip.days.find((day) => day.day === activeDay)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === selectedDay.images.length - 1 ? 0 : prev + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? selectedDay.images.length - 1 : prev - 1))
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="container">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Blog
      </motion.h2>

      <motion.div
        className="field-trip-section"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h3>{fieldTrip.title}</h3>

        <motion.div
          className="field-trip-tabs"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {fieldTrip.days.map((day) => (
            <motion.button
              key={day.day}
              className={`tab-btn ${activeDay === day.day ? "active" : ""}`}
              onClick={() => {
                setActiveDay(day.day)
                setCurrentImageIndex(0)
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {day.day}
            </motion.button>
          ))}
        </motion.div>

        <div className="field-trip-content">
          <motion.div
            className="field-trip-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4>{selectedDay.title}</h4>
            <p>{selectedDay.description}</p>
            <div className="image-navigation">
              <span className="image-counter">
                {currentImageIndex + 1} of {selectedDay.images.length} images
              </span>
              <div className="image-nav-buttons">
                <motion.button
                  className="nav-btn"
                  onClick={prevImage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-chevron-left"></i>
                </motion.button>
                <motion.button
                  className="nav-btn"
                  onClick={nextImage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <i className="fas fa-chevron-right"></i>
                </motion.button>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="field-trip-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src={selectedDay.images[currentImageIndex] || "/placeholder.svg"}
              alt={`${selectedDay.title} - Image ${currentImageIndex + 1}`}
            />
          </motion.div>
        </div>

        <motion.div
          className="image-thumbnails"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {selectedDay.images.map((image, index) => (
            <motion.div
              key={index}
              className={`thumbnail ${currentImageIndex === index ? "active" : ""}`}
              onClick={() => setCurrentImageIndex(index)}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={image || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {selectedPost && (
        <motion.div className="post-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div
            className="post-modal-content"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="post-modal-header">
              <h3>{selectedPost.title}</h3>
              <motion.button
                className="close-btn"
                onClick={() => setSelectedPost(null)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className="fas fa-times"></i>
              </motion.button>
            </div>
            <div className="post-modal-body">
              <div className="post-modal-image">
                <img src={selectedPost.image || "/placeholder.svg"} alt={selectedPost.title} />
              </div>
              <p className="post-modal-date">{selectedPost.date}</p>
              <div className="post-modal-text">
                <p>{selectedPost.content}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default Blog
