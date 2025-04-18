import React, { useState } from 'react';
import Logo from '../components/Logo';
import CaseStudyDisplay from '../components/CaseStudyDisplay';
import { sampleCaseStudy } from '../data/sampleCaseStudy';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs';

const Index = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-wiw-light py-8 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6 flex justify-center md:justify-start">
          <Logo />
        </div>
        
        <Tabs 
          defaultValue="overview" 
          className="w-full mb-4"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-7">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="methodology">Methodology</TabsTrigger>
            <TabsTrigger value="income-investments" className="whitespace-normal leading-tight">
              Income<br />&amp; Investments
            </TabsTrigger>
            <TabsTrigger value="expenses-liabilities" className="whitespace-normal leading-tight">
              Expenses<br />&amp; Liabilities
            </TabsTrigger>
            <TabsTrigger value="business-pl">Business P&L</TabsTrigger>
            <TabsTrigger value="scenarios">Scenarios</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
          </TabsList>
          
          <div className="mb-8 mt-6 flex justify-between items-center">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-wiw-dark-blue">
              Scenario Studies for Pam Falkins
            </h1>
            <div className="text-right">
              <p className="text-sm text-gray-500">Date</p>
              <p className="font-medium">{sampleCaseStudy.date}</p>
            </div>
          </div>
          
          <TabsContent value="overview">
            <div className="space-y-6">
              <CaseStudyDisplay data={sampleCaseStudy} activeTab="overview" />
            </div>
          </TabsContent>
          
          <TabsContent value="methodology">
            <div className="space-y-6">
              <CaseStudyDisplay data={sampleCaseStudy} activeTab="methodology" />
            </div>
          </TabsContent>
          
          <TabsContent value="income-investments">
            <div className="space-y-6">
              <CaseStudyDisplay data={sampleCaseStudy} activeTab="income-investments" />
            </div>
          </TabsContent>
          
          <TabsContent value="expenses-liabilities">
            <div className="space-y-6">
              <CaseStudyDisplay data={sampleCaseStudy} activeTab="expenses-liabilities" />
            </div>
          </TabsContent>
          
          <TabsContent value="business-pl">
            <div className="space-y-6">
              <CaseStudyDisplay data={sampleCaseStudy} activeTab="business-pl" />
            </div>
          </TabsContent>
          
          <TabsContent value="scenarios">
            <div className="space-y-6">
              <CaseStudyDisplay data={sampleCaseStudy} activeTab="scenarios" />
            </div>
          </TabsContent>
          
          <TabsContent value="insights">
            <div className="space-y-6">
              <CaseStudyDisplay data={sampleCaseStudy} activeTab="insights" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
