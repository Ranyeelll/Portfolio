import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Eye } from 'lucide-react';
import { Card } from './ui/Card';
import { Modal } from './ui/Modal';
import { Button } from './ui/Button';
// ===== EDIT YOUR CERTIFICATES HERE =====
const certificates = [
{
  id: 1,
  title: 'mabl Skills Certification - Foundations',
  issuer: 'mabl University',
  date: '2024',
  image: "/9db236a8-e214-4814-9908-e85b1df52fe1.jpg"

},
{
  id: 2,
  title: 'CS406: Information Security',
  issuer: 'Saylor Academy',
  date: 'March 2025',
  image: "/b9809b0f-0a98-479c-8f79-6faebbf67909.jpg"

}];

// ===== END CERTIFICATES SECTION =====
export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<
    (typeof certificates)[0] | null>(
    null);
  return (
    <section id="certificates" className="py-24 bg-slate-50 dark:bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1.5 bg-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {certificates.map((cert, index) =>
          <motion.div
            key={cert.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: index * 0.1
            }}>

              <Card
              hover={true}
              className="group cursor-pointer"
              onClick={() => setSelectedCert(cert)}>

                <div className="relative h-48 overflow-hidden bg-slate-200 dark:bg-slate-800">
                  <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Eye className="text-white w-8 h-8" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <Award className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                </div>
              </Card>
            </motion.div>
          )}
        </div>

        <Modal
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
          title="Certificate Details">

          {selectedCert &&
          <div className="text-center">
              <div className="rounded-lg overflow-hidden mb-6 border border-slate-200 dark:border-slate-700">
                <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto" />

              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                {selectedCert.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Issued by {selectedCert.issuer} • {selectedCert.date}
              </p>

              <div className="flex justify-center">
                <Button variant="outline" onClick={() => setSelectedCert(null)}>
                  Close Preview
                </Button>
              </div>
            </div>
          }
        </Modal>
      </div>
    </section>);

}