import Image from 'next/image';
import { motion } from "framer-motion";
import { LuLock, LuKey, LuUserCheck, LuClockAlert, LuPackageOpen, LuUserX } from "react-icons/lu";
import { useTranslation } from "~~/lib/i18n/LanguageContext";

export default function Security() {
  const { t } = useTranslation();

  const security = [
    {
      icon: LuKey,
      titleKey: 'security.features.selfcustody.title',
      descriptionKey: 'security.features.selfcustody.description',
    },
    {
      icon: LuUserCheck,
      titleKey: 'security.features.control.title',
      descriptionKey: 'security.features.control.description',
    },
    {
      icon: LuLock,
      titleKey: 'security.features.locktime.title',
      descriptionKey: 'security.features.locktime.description',
    },
    {
      icon: LuClockAlert,
      titleKey: 'security.features.claimtime.title',
      descriptionKey: 'security.features.claimtime.description',
    },
    {
      icon: LuPackageOpen,
      titleKey: 'security.features.opensource.title',
      descriptionKey: 'security.features.opensource.description',
    },
    {
      icon: LuUserX,
      titleKey: 'security.features.nottp.title',
      descriptionKey: 'security.features.nottp.description',
    },
  ];



  return (
    <section id="security" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className=""
          >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('security.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('security.subtitle')}
          </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            >
            <Image
              src="/security-image3.png"
              width={750}
              height={502}
              className="rounded-xl shadow-xl"
              alt="Cyber security desktop version icon"
            />
          </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 gap-8">
          {security.map((security, index) => (
            <motion.div className="flex-1 flex flex-column"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="card w-96 bg-base-100 card-lg shadow-sm">
                <div className="card-body">
                  
                  <security.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{t(security.titleKey)}</h3>
                  <p className="text-muted-foreground">{t(security.descriptionKey)}</p>
                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}