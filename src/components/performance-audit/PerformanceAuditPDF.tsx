import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

// Register fonts
Font.register({
  family: 'Space Grotesk',
  src: 'https://fonts.gstatic.com/s/spacegrotesk/v22/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-gOoraIAEj4PVksj.ttf' // Bold TTF
});

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#0c1f0c',
    color: '#e5e7eb',
    fontFamily: 'Helvetica',
    padding: 40,
  },
  coverPage: {
    backgroundColor: '#0c1f0c',
    color: '#e5e7eb',
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    fontFamily: 'Space Grotesk',
    fontSize: 28,
    color: '#10b981',
    letterSpacing: 2,
    marginBottom: 80,
  },
  title: {
    fontFamily: 'Space Grotesk',
    fontSize: 32,
    color: '#10b981',
    textAlign: 'center',
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 16,
    color: '#a3b8a3',
    textAlign: 'center',
    marginBottom: 60,
  },
  date: {
    fontSize: 12,
    color: '#4b5f4b',
  },
  header: {
    fontFamily: 'Space Grotesk',
    fontSize: 24,
    color: '#ffffff',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#10b981',
    paddingBottom: 10,
    textTransform: 'uppercase',
  },
  text: {
    fontSize: 12,
    lineHeight: 1.6,
    color: '#e5e7eb',
    marginBottom: 10,
  },
  highlightBox: {
    backgroundColor: '#112611',
    borderLeftWidth: 3,
    borderLeftColor: '#10b981',
    padding: 15,
    marginVertical: 15,
  },
  highlightText: {
    fontSize: 14,
    color: '#ffffff',
    fontStyle: 'italic',
  },
  scoreBox: {
    alignItems: 'center',
    marginVertical: 30,
  },
  scoreNumber: {
    fontFamily: 'Space Grotesk',
    fontSize: 60,
    color: '#10b981',
  },
  scoreLabel: {
    fontSize: 16,
    color: '#ffffff',
    marginTop: 5,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#1e381e',
    paddingVertical: 12,
  },
  colLeft: {
    width: '45%',
    fontSize: 11,
    color: '#a3b8a3',
  },
  colRight: {
    width: '45%',
    fontSize: 11,
    color: '#10b981',
  },
  archetypeTitle: {
    fontFamily: 'Space Grotesk',
    fontSize: 28,
    color: '#10b981',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  archetypeDesc: {
    fontSize: 14,
    lineHeight: 1.6,
    marginBottom: 20,
  },
  microActionTitle: {
    fontFamily: 'Space Grotesk',
    fontSize: 20,
    color: '#ffffff',
    marginTop: 30,
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: 'center',
    fontSize: 10,
    color: '#4b5f4b',
    borderTopWidth: 1,
    borderTopColor: '#1e381e',
    paddingTop: 10,
  },
  pillarRow: {
    marginBottom: 20,
  },
  pillarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  pillarName: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  pillarScore: {
    fontSize: 14,
    color: '#10b981',
    fontWeight: 'bold',
  },
  trackBar: {
    backgroundColor: '#112611',
    height: 10,
    borderRadius: 5,
    width: '100%',
    overflow: 'hidden',
  },
  fillBar: {
    backgroundColor: '#10b981',
    height: '100%',
    borderRadius: 5,
  }
});

interface PerformanceAuditPDFProps {
  firstName: string;
  totalScore: number;
  level: string;
  label: string;
  diagnosisText: string;
  archetype: {
    name: string;
    profile: string;
    problem: string;
    actionName: string;
    actionDesc: string;
  };
  breakdown: Record<string, number>; // Scores out of 10
  language?: 'NL' | 'ENG';
}

export const PerformanceAuditPDF: React.FC<PerformanceAuditPDFProps> = ({
  firstName,
  totalScore,
  level,
  label,
  diagnosisText,
  archetype,
  breakdown,
  language = 'NL'
}) => {
  const isEng = language === 'ENG';

  const dateStr = isEng
    ? new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : new Date().toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <Document>
      {/* Cover Page */}
      <Page size="A4" style={styles.coverPage}>
        <Image src="/images/logoTTM.png" style={{ width: 300, marginBottom: 50 }} />
        <Text style={styles.title}>{isEng ? 'Your Performance Audit' : 'Jouw Performance Audit'}</Text>
        <Text style={styles.subtitle}>{firstName}</Text>
        <Text style={styles.date}>{dateStr}</Text>
      </Page>

      {/* Diagnosis Page */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>{isEng ? 'The Diagnosis' : 'De Diagnose'}</Text>
        
        <View style={styles.scoreBox}>
          <Text style={styles.scoreNumber}>{totalScore}</Text>
          <Text style={styles.scoreLabel}>/ 100</Text>
        </View>

        <View style={styles.highlightBox}>
          <Text style={styles.highlightText}>{isEng ? `You are in: ${level}` : `Je zit in: ${level}`}</Text>
          <Text style={[styles.text, { marginTop: 10, fontSize: 16, color: '#10b981', fontWeight: 'bold' }]}>{label}</Text>
        </View>

        <Text style={[styles.text, { marginTop: 20, fontSize: 13, lineHeight: 1.7 }]}>
          {diagnosisText}
        </Text>
        
        <Text style={[styles.text, { marginTop: 30, fontSize: 12, color: '#a3b8a3', fontStyle: 'italic' }]}>
          {isEng 
            ? '* This is an indication based on the completed The Thryve Method Performance Audit. Real peak performance starts with closing invisible leaks in your system.'
            : '* Dit is een indicatie op basis van de ingevulde The Thryve Method Performance Audit. Echte peak performance begint bij het dichten van onzichtbare lekkages in je systeem.'}
        </Text>

        <Text style={styles.footer}>© {new Date().getFullYear()} The Thryve Method | Performance Audit</Text>
      </Page>

      {/* Pillar Breakdown Page */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>{isEng ? 'Detailed Pillar Status' : 'Gedetailleerde Pijler Status'}</Text>
        
        <View style={{ marginTop: 20 }}>
          {Object.entries(breakdown).map(([cat, scoreOutOf10]) => {
            const percentage = Math.round(Number(scoreOutOf10) * 10);
            return (
              <View key={cat} style={styles.pillarRow}>
                <View style={styles.pillarHeader}>
                  <Text style={styles.pillarName}>{cat}</Text>
                  <Text style={styles.pillarScore}>{percentage}%</Text>
                </View>
                <View style={styles.trackBar}>
                  <View style={[styles.fillBar, { width: `${percentage}%` }]} />
                </View>
              </View>
            );
          })}
        </View>

        <Text style={styles.footer}>© {new Date().getFullYear()} The Thryve Method | Performance Audit</Text>
      </Page>

      {/* Archetype Page */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>{isEng ? 'Your Archetype' : 'Jouw Archetype'}</Text>
        
        <Text style={styles.archetypeTitle}>{archetype.name}</Text>
        <Text style={styles.archetypeDesc}>{archetype.profile}</Text>
        
        <View style={styles.highlightBox}>
          <Text style={{ fontSize: 12, color: '#10b981', marginBottom: 5 }}>{isEng ? 'Core Problem' : 'Kernprobleem'}</Text>
          <Text style={styles.text}>{archetype.problem}</Text>
        </View>

        <Text style={styles.microActionTitle}>{isEng ? 'One Thing For This Week' : 'Eén Ding Voor Deze Week'}</Text>
        <Text style={{ fontSize: 16, color: '#10b981', marginBottom: 10 }}>{archetype.actionName}</Text>
        <Text style={styles.text}>{archetype.actionDesc}</Text>
        
        <Text style={[styles.text, { marginTop: 15, fontStyle: 'italic', color: '#a3b8a3' }]}>
          {isEng 
            ? 'This is 1 of the 15+ protocols that we have your archetype install.'
            : 'Dit is 1 van de 15+ protocollen die we jouw archetype laten installeren.'}
        </Text>

        <Text style={styles.footer}>© {new Date().getFullYear()} The Thryve Method | Performance Audit</Text>
      </Page>

      {/* Over 12 Weken */}
      <Page size="A4" style={styles.page}>
        <Text style={styles.header}>{isEng ? 'Now vs. In 12 Weeks' : 'Nu vs. Over 12 Weken'}</Text>
        
        <View style={{ marginTop: 20 }}>
          <View style={styles.row}>
            <Text style={{ width: '20%', fontSize: 12, fontWeight: 'bold' }}>{isEng ? 'Pillar' : 'Pijler'}</Text>
            <Text style={{ width: '40%', fontSize: 12, fontWeight: 'bold', color: '#e5e7eb' }}>{isEng ? 'Now' : 'Nu'}</Text>
            <Text style={{ width: '40%', fontSize: 12, fontWeight: 'bold', color: '#10b981' }}>{isEng ? 'In 12 Weeks' : 'Over 12 Weken'}</Text>
          </View>
          
          <View style={styles.row}>
            <Text style={{ width: '20%', fontSize: 11 }}>Focus</Text>
            <Text style={styles.colLeft}>{isEng ? 'Distracted, jumps' : 'Afgeleid, sprongen'}</Text>
            <Text style={styles.colRight}>{isEng ? '6 hours of deep work directly' : '6 uur deep work direct'}</Text>
          </View>
          
          <View style={styles.row}>
            <Text style={{ width: '20%', fontSize: 11 }}>{isEng ? 'Stress' : 'Stress'}</Text>
            <Text style={styles.colLeft}>{isEng ? 'Mind is always on' : 'Hoofd staat altijd aan'}</Text>
            <Text style={styles.colRight}>{isEng ? 'Mental peace, also on weekends' : 'Mentale rust, ook in weekend'}</Text>
          </View>

          <View style={styles.row}>
            <Text style={{ width: '20%', fontSize: 11 }}>{isEng ? 'Energy' : 'Energie'}</Text>
            <Text style={styles.colLeft}>{isEng ? 'Wake up tired, afternoon dip' : 'Moe wakker, middagdip'}</Text>
            <Text style={styles.colRight}>{isEng ? 'Stable energy all day' : 'Stabiele energie de hele dag'}</Text>
          </View>

          <View style={styles.row}>
            <Text style={{ width: '20%', fontSize: 11 }}>{isEng ? 'Body' : 'Lichaam'}</Text>
            <Text style={styles.colLeft}>{isEng ? 'Poor recovery, no progression' : 'Slecht herstel, geen progressie'}</Text>
            <Text style={styles.colRight}>{isEng ? 'Stronger, leaner, fully recovered' : 'Sterker, strakker, volledig hersteld'}</Text>
          </View>
        </View>

        <Text style={[styles.header, { marginTop: 60, borderBottomWidth: 0, fontSize: 20 }]}>
          {isEng ? 'What The Thryve Method Does' : 'Wat The Thryve Method Doet'}
        </Text>
        <Text style={styles.text}>
          {isEng 
            ? 'This is not fitness coaching. This is performance architecture.'
            : 'Dit is geen fitness coaching. Dit is performance architecture.'}
        </Text>
        <Text style={styles.text}>• Muscular Foundation</Text>
        <Text style={styles.text}>• Nervous System Control</Text>
        <Text style={styles.text}>• Dopamine Regulation</Text>
        <Text style={styles.text}>• Structured Recovery</Text>

        <Text style={styles.footer}>© {new Date().getFullYear()} The Thryve Method | Performance Audit</Text>
      </Page>
    </Document>
  );
};
