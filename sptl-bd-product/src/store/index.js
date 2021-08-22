import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rightMenu:[],
    noRightMess: '抱歉你暂无权限，请联系李颖（liying5@asiainfo.com）申请!',
    prodList: [
      {
        id: 'prod1',productId:'di', name: '大数据基础平台', enName: 'Data Infrastructure', description: '为企业提供大数据的存储、计算及分析能力，提供管理、监控、优化一体化的大数据基础平台',
        goodnessList: [{id: '1', name: '完备', description: '产品体系完备，提供集大数据采集，存储，管理，分析，运维，开放与一体的产品能力。支持批，流业务处理，提供多种数仓，NoSQL数据库，消息队列服务，提供MapReduce，Tez，Spark，Flink等多种计算框架。'},
        {id: '2', name: '成熟', description: '产品部署规模近万，对大中小型大数据平台交付，运维具有丰富的经验，团队中有大量大数据平台运维专家，每年处理300+左右大数据平台运维疑难故障，同时提供大数据平台优化，扩容，升级，跨机房，跨数据中心，搬迁等多种解决方案和落地实施服务。'},
        {id: '3', name: '生态', description: '产品具备贯通大数据生态上中下游的能力，同时积极拓展业务合作伙伴，通过开放的框架，开放的接口，开放的态度丰富大数据平台能力。'},
        {id: '4', name: '开源', description: '产品演进采用开源+自研，多个子产品间实现松耦合，产品技术选型多基于业内主流开源技术作为基础。在保持与开源技术完美融合前提下，也积极参与开源社区活动，包括代码提交，技术分享，技术峰会等。'}],
        url: '/product/di' ,
        href: 'http://10.1.236.91:1001/#/home/signin',
        picture: 'prod1.png',
        docs: [{id: 1, name: '大数据基础平台白皮书（2020年度）', url: 'Data Infrastructure/08.2020年亚信科技大数据基础平台（DP）产品白皮书.pdf'}, {id: 2, name: '大数据基础平台方案简介（2020年度）', url: 'Data Infrastructure/10.亚信科技：AISWare DataInfrastructure大数据基础平台产品介绍.pdf'}]
      }, {
        id: 'prod2',productId:'dataos', name: '数据开发运营平台', enName: 'Data OS', description: '围绕数据资产开发、治理、运营、运维等全方位工作提供端到端的全生命周期、全景式、全流程操作能力',
        goodnessList: [{id: '1', name: '锻造全链路集成开发模式', description: '结合前向数据治理能力实现数据操作过程标准化、流程化，通过集成组件调用、代码编写、调试等一体化的面向数据开发的套件工具，闭环涵盖各类数据开发场景。'},
        {id: '2', name: '灵活普适的对外服务模式', description: '以业务为导向沉淀可被BU复用的能力，通过Data API、Open IDE、Embedded DSL三类面向数据域的标准方式支撑数据能力、工具能力和模型能力的场景化开放。'},
        {id: '3', name: '标准化模型管理支撑能力', description: '基于多年行业理解构建形成全数据资产管理框架体系，以“所见即所得”的设计理念完成模型设计到模型实现流程的标准规范性落地，实现模型管理过程的可度量。'},
        {id: '4', name: '数据治理环节的智能化', description: '结合机器学习等技术具体应用到数据治理等环节，构建从基于规则的人工操作到自动操作的处理流程，支撑数据质量、数据安全与作业调度在策略管理与应对处理方面的能力提升。'}
        ],
        url: '/dataos',
        picture: 'prod2.png',
        href: 'http://10.19.83.121/frame/personal-home',
        docs: [{id: 1, name: '数据开发运营平台白皮书（2020年度）', url: 'Data OS/08.AISWare DataOS-白皮书.pdf'}, {id: 2, name: '数据开发运营平台方案简介（2020年度）', url: 'Data OS/AISware DataOS产品简介.pdf'}]
      }, {
        id: 'prod3',productId:'dts', name: '数据探索分析平台', enName: 'Data Discovery', description: '提供自助式、可视化、可分析、可协作的数据探索与分析平台，让人人均可成为数据分析专家或工作者',
        goodnessList: [
          {id: '1', name: '普惠', description: '即能支撑业务分析师完成日常数据分析工作，又能支撑一线业务人员完成日常报表和取数，也能支撑开发工程师进行二次开发和需求定制。'},
          {id: '2', name: '自助', description: '向导式的场景体验，专业业务术语的数据表达，降低使用门槛。采用拖拽式的设计体验，一致性的交互体验，提升易用性。 '},
          {id: '3', name: '专业', description: '从浅入深提供多种统计分析，不仅支持明细数据的统计汇总，也支持对数据的编排分析（例如：价格分档），也支持科学计算分析（例如：概率分布）。'},
          {id: '4', name: '实用', description: '提供幻灯片形式的分析报告，实现在线PPT的季报/年报。实现多平台的数据呈现，使随处可及（例如：web，移动端，邮件等）。'},
          {id: '5', name: '安全', description: '多种数据安全保障措施。提供千人千面的数据访问控制，支持数据脱敏、数字水印，日志记录、第三方安全接入等多种措施。'},
          {id: '6', name: '开放', description: '与第三方系统快速集成。采用标准化接口快速接入分析数据源，制作完成的分析/报表也支持推送到第三方系统。'}
          ],
          url: '/product/dts',
          picture: 'prod3.png',
          href: 'http://10.1.235.184:9060/dts/sso/union-entry',
          docs: [{id: 1, name: '数据探索分析平台白皮书（2020年度）', url: 'Data Discovery/08.AISWare DataDiscovery 亚信科技数据探索分析平台(白皮书)v1.1.pdf'}, {id: 2, name: '数据探索分析平台方案简介（2020年度）', url: 'Data Discovery/10.AISWare DataDisocvery产品总体介绍.pdf'}]
      }, {
        id: 'prod4',productId:'ak', name: '知识图谱平台', enName: 'AISWare KG', description: '基于图数据库、图计算引擎和图可视化分析构建的一站式通用知识计算平台',
        goodnessList: [
          {id: '1', name: '知识运营', description: '依托亚信丰富的行业经验，预置市场营销、社交网络、企业关系、智能运维等知识模型，支撑及拓展各专业领域的知识沉淀，助力企业知识运营体系的构建。'},
          {id: '2', name: 'AI赋能', description: '无缝对接亚信AI^2平台，全面集成各类AI算法。基于AI平台提供的词向量学习、强化学习，图神经网络等AI算法，支撑更高级的智能推理能力。'},
          {id: '3', name: '多源融合', description: '集成爬虫、NLP、OCR识别等能力，支持从各类结构化、非结构化视频、图像、文本等异构数据中萃取知识，并通过实体归一、属性融合等手段实现多源数据的知识融合。'},
          {id: '4', name: '服务开放', description: '通过标准REST API接口为客户提供知识查询及智能问答服务，支持 JDBC 函数式调用提供服务，同时也支持类 SQL 结构化查询语言。支持Gremlin查询操作读取数据。'}
          ],
          url: '/product/ak',
          picture: 'prod4.png',
          href: 'http://10.21.10.93:19988/kgweb/unifiedPortalMgr',
          docs: [{id: 1, name: '知识图谱平台白皮书（2020年度）', url: 'AISWare KG/08.AISWare Knowledge Graph 亚信科技知识图谱产品 产品白皮书.pdf'}, {id: 2, name: '知识图谱平台方案简介（2020年度）', url: 'AISWare KG/10.AISWare Knowledge Graph 知识图谱产品介绍V1.0.pdf'}]
      }
    ],
    newsMovie:[{id: '1', name: 'Data Infrastructure', src: ''}, {id: '2', name: 'Data OS', src: ''}, {id: '3', name: 'Data Discovery', src: ''}, {id: '4', name: 'AISWare KG', src: ''}],

      productData:{
          dts:{
              id:'1',name:'数据探索分析平台',nameEN:'DATA DISCOVERY',desc:'数据探索分析平台（AISWare Data Discovery）是亚信深耕电信行业多年独立研发的集数据指标体系创建、海量数据自助分析、多维多指标交叉分析、多端可视化展现的全能型商务智能解决方案',
              sceneName:'产品功能',href: 'http://10.1.235.184:9060/dts/sso/union-entry',
              videoUrl:'dts/home.mp4',
              funList:[
                  {id:'1',funName:'自助取数能力',funNameEN:'Self-service Analyzer',funDesc:'基于宽表，实现界面化的数据筛选、组合和二次计算，形成取数结果，可推送用于营销。'},
                  {id:'2',funName:'多数据源接入',funNameEN:'Multi data source access',funDesc:'支持多种数据库适配，在数据可视化时，可以同时接入不同的数据在同一画布展现。'},
                  {id:'3',funName:'丰富的数据可视化组件',funNameEN:'Data visualization components',funDesc:'提供多种数据可视化组件，包括：指标卡，柱图，线图，桑基图，盒须图，散点图，地图等。'},
                  {id:'4',funName:'在线分析报告能力',funNameEN:'Online analysis and reporting',funDesc:'类似PPT的展现形式，可以在线制作和访问，也可离线下载成可编辑的PPT。'},
                  {id: '5', funName: '科学计算能力', funNameEN: 'Scientific and commercial computing', funDesc: '不仅支持常规数据分析，和计算指标等，也支持基于Python的科学计算算法分析和展现。'},
                  {id: '6', funName: '实时分析能力', funNameEN: 'Real-time analysis', funDesc: '数据可视化展现时，支持数据自动实时更新，适用于指标监控、运维支撑等场景。'},
                  {id: '7', funName: '大屏适配能力', funNameEN: 'Big data screen', funDesc: '支持数据可视化内容推送到大屏展现，提供多种大屏分析模板。'},
                  {id: '8', funName: '移动端适配', funNameEN: 'Mobile terminal adaptation', funDesc: '支持数据可视化内容以移动端H5方式呈现，支持钉钉接入和企业微信接入。'}
              ],
              scenariosList:[
                  {id:'1',title:'为企业快速构建BI报表系统',content:'使用DataDiscovery快速完成报表制作并推送到BI报表系统或经分门户，赋能企业各类经营分析与决策。'},
                  {id:'2',title:'支撑业务人员DIY取数场景',content:'提供业务术语化的自助取数配置，取数任务执行和结果推送，帮助业务人员轻松DIY各类场景的取数任务。'},
                  {id:'3',title:'提升数据分析的专业化程度',content:'提供多种数据分析方法，包括明细数据到KPI级数据的聚合，数据的编排和组合分析（例如：价格分档、Top排名等），以及科学计算的分析（例如：概率分布）。有效的提升数据分析的专业化程度。'},
                  {id:'4',title:'辅助企业定制大屏应用场景',content:'通过DataDiscovery构建系统监控大屏，用更生动、友好的形式，清晰的呈现企业运营全局状态。'},
              ],
              solutionList:[
                  {id:'1',title:'联通物联网基于DTS构建BI体系',content:'联通物联网公司基于亚信科技数据探索分析平台（AISWare DataDiscovery ） 构建公司级BI体系。实现4大模块30类分析支撑.',contact:''},
                  {id:'2',title:'助力电信行业经营决策',content:'某省移动借助数说工厂进行业务市场运营状况监控，并借助指标仪表盘进行业务短板分析，助力市场管理人员经营决策！',contact:''},
                  {id:'3',title:'助力移动对通话流失进行深入分析',content:'某省移动大数据中心利用DataDiscovery的指标探索子产品，针对目前携号转网政策，对携转、流失客户，进行根因分析，有针对性的制定维系挽留方案。',contact:''}
              ],
              advantageList:[
                  {id:'1',title:'普惠',content:'即能支撑业务分析师完成日常数据分析工作，又能支撑一线业务人员完成日常报表和取数，也能支撑开发工程师进行二次开发和需求定制。'},
                  {id:'2',title:'自助',content:'向导式的场景体验，专业业务术语的数据表达，降低使用门槛。采用拖拽式的设计体验，一致性的交互体验，提升易用性。'},
                  {id:'3',title:'专业',content:'从浅入深提供多种统计分析，不仅支持明细数据的统计汇总，也支持对数据的编排分析（例如：价格分档），也支持科学计算分析（例如：概率分布）。'},
                  {id:'4',title:'实用',content:'提供幻灯片形式的分析报告，实现在线PPT的季报/年报。实现多平台的数据呈现，使随处可及（例如：web，移动端，邮件等）。'},
                  {id:'5',title:'安全',content:'多种数据安全保障措施。提供千人千面的数据访问控制，支持数据脱敏、数字水印，日志记录、第三方安全接入等多种措施。'},
                  {id:'6',title:'开放',content:'与第三方系统快速集成。采用标准化接口快速接入分析数据源，制作完成的分析/报表也支持推送到第三方系统。'},
              ],
              coreCompetenceList:[
                  {id:'1',title:'为企业快速构建BI报表系统',url:'dts/1.mp4'},
                  {id:'2',title:'支撑业务人员DIY取数需求',url:'dts/2.mp4'},
                  {id:'3',title:'制作季度年度报告',url:'dts/3.mp4'},
              ],
              productTrendsList:[
                  {id:'1',title:'可视化组件增强、\n邮件推送等功能研发',time:'2020-01-01',version:'V5.0'},
                  {id:'2',title:'幻灯片展现、\n移动端适配等功能研发',time:'2020-06-30',version:'V5.0'},
                  {id:'3',title:'可视化组件增强、\n邮件推送等功能上线',time:'2020-07-06',version:'V5.0'},
                  {id:'4',title:'幻灯片展现、\n移动端适配等功能上线',time:'2020-11-30',version:'V5.0'},
                  {id:'5',title:'版本发布',time:'2020-12-30',version:'V5.0'},
              ],
              experience:{
                  id:'1',title:'选择Data Discovery，打造大数据生产力平台',url:''
              }
          },
          di:{
              name:'亚信大数据基础平台',nameEN:'Data Infrastructure',desc:'亚信数据基础平台（AISWare DataInfrastructure），提供完整的Hadoop技术生态环境，为企业提供大数据的存储、计算及分析能力，提供管理、监控、优化一体化的大数据基础平台，并提供专业的大数据服务、运维、咨询，协助客户打造企业级低成本、高效，稳定、安全的大数据技术平台。',
              sceneName:'应用场景',href: 'http://10.1.236.91:1001/#/home/signin',
              videoUrl:'di/home.mp4',
              funList:[
                  {id:'1',funName:'大数据平台',funNameEN:'Data Platform',funDesc:'提供大数据环境下的数据存储和计算能力 ，为企业级大数据采集、存储、计算、分析的一体化大数据平台。'},
                  {id:'2',funName:'集群管控',funNameEN:'Cluster Manager',funDesc:'以多租户管理为核心，实现大数据平台的资源分配、安全能力、运营能力一体化管理。'},
                  {id:'3',funName:'集群洞察',funNameEN:'Cluster Insight',funDesc:'大数据平台的智能化的辅助运维工具，为集群运维、 集群调优等方面提供支持。'},
                  {id:'4',funName:'流处理引擎',funNameEN:'Streaming Processor',funDesc:'提供分布式实时数据分析的全栈能力, 赋能企业标准实时数据处理流程和行业解决方案。'},
                  {id:'5',funName:'关联检索引擎',funNameEN:'Search Engine',funDesc:'面向结构化、非结构化数据的实时入库和检索平台，为上层应用提供存储、检索、数据访问安全等能力。'},
                  {id:'6',funName:'图分析引擎',funNameEN:'Graph Analysis',funDesc:'集成图数据库、图计算引擎和图可视化分析的一站式平台，快速建立图特征的业务。'}
              ],
              scenariosList:[
                  {id:'1',title:'企业大数据平台底座',content:'大数据底座，使用基于x86和ARM架构的服务器，提供大数据环境下的数据存储和计算能力，应用于电信、邮政、广电、高速、银行等行业的大数据应用。'},
                  {id:'2',title:'大数据能力统一管控',content:'大数据域资源的统一管理，实现资源按需分配，支持资源的运营分析，可根据租户的实际需求使资源利用率达到最优，并且支持多集群的管控，可应对多集群及多中心的集群部署架构。'},
                  {id:'3',title:'智能运维',content:'基于YARN队列的历史数据、使用大数据挖掘、机器学习相结合的手段，构建YARN队列资源分析的训练系统，实现YARN队列使用饱和度、资源满足度的分析,提供队列资源分配的建议。 '},
                  {id:'4',title:'大规模实时流数据处理',content:'强大且全面的流计算引擎，产品支持业界主流的计算引擎：Sparkstreaming、Flink。具备高性能，数据计算延迟优化到秒级甚至亚秒级。'},
              ],
              solutionList:[
                  {id:'1',title:'集中化大数据平台',content:'实现平台、数据中台及应用的统一管理，支持移动多个省公司入驻，围绕业务、技术等方面构建完整大数据域PaaS服务体系，从而满足各省公司、专业公司大数据应用需求，并可为全网各业务部门提供灵活的服务。',contact:''},
                  {id:'2',title:'实时旅游人员轨迹分析',content:'通过流处理引擎，对MC信令的实时处理，实时采集景区在网人数、入园记录、行为轨迹，为智慧旅游平台供准确的数据。为大数据变现进行了有效探索。',contact:''},
                  {id:'3',title:'移动位置运营项目',content:'实现2/3G、4G的信令数据以及上网数据的采集转换 ->流式运算->订阅输出，形成精准的用户位置信息，为业务系统提供分析和判断依据。',contact:''}
              ],
              advantageList:[
                  {id:'1',title:'多种数据存储方式',content:'提供如HDFS、Hive、Hbase等多类型存储方式，HDFS使用纠删码技术节省数据备份数量，大大节省存储空间。'},
                  {id:'2',title:'多种算力融合',content:'多种实时处理、批处理及批流融合技术，并支持计算向边缘延伸，实现云边协同，大大提高计算效率。'},
                  {id:'3',title:'异构多集群管理',content:'实现跨域、多集群，边云协同的统一资源调度，扩展集群节点数量，实现大规模的集群管理。'},
                  {id:'4',title:'标准接口提供资源服务',content:'将计算、存储、组件、工具等多种资源以服务的形式，通过标准接口为客户提供服务，达到开箱即用，大大降低使用门槛。'},
                  {id:'5',title:'预制多种开发查询工具',content:'预置场景化实时处理工具、交互式数据检索工具及图分析工具，为客户提供便捷的开发查询需求。'},
                  {id:'6',title:'全方位洞察 智能运维',content:'通过资源、性能、安全的深度洞察和智能规划，保障大数据集群的合理部署和不断优化，达到充分利用资源的目的。'},
              ],
              coreCompetenceList:[
                  {id:'1',title:'集群管控：大数据多租户管理能力',url:'di/1.mp4'},
                  {id:'2',title:'流处理：批流融合计算',url:'di/2.mp4'},
                  {id:'3',title:'集群洞察：大数据平台故障诊断',url:'di/3.mp4'},
              ],
              productTrendsList:[
                  {id:'1',title:'ARM支持等功能开发',time:'2020-03-01',version:'V5.2'},
                  {id:'2',title:'V5.2版本发布',time:'2020-06-30',version:'V5.2'},
                  {id:'3',title:'Flink支持、LLAP支持多租户等功能开发',time:'2020-07-01',version:'V5.3'},
                  {id:'4',title:'V5.3版本发布',time:'2020-12-30',version:'V5.3'},
              ],
              experience:{
                  id:'1',title:'选择DataInfrastructure，建设大数据生产底座',url:''
              }
          },
          dataos:{
              name:'数据开发运营平台',nameEN:'DATA OS',desc:'通过健康度体检、运营决策视图、模型共享仓库等应用打通数据资产能力价值通道，实现数据资产内外部的生态共赢',
              sceneName:'应用场景',href: 'http://10.19.83.121/frame/personal-home',
              videoUrl:'do/home.mp4',
              funList:[
                  {id:'1',funName:'元数据管理',funNameEN:'Metadata management',funDesc:'通过采集汇聚，形成“物理分散、逻辑统一”的统一元数据管理。'},
                  {id:'2',funName:'数据标准',funNameEN:'Data standards',funDesc:'通过统一的数据标准制定和发布，提高企业级大数据平台数据治理水平。'},
                  {id:'3',funName:'数据质量',funNameEN:'Data quality',funDesc:'数据质量管理具备对数据时效性、完整性、准确性、一致性的保障要求。'},
                  {id:'4',funName:'分布式调度能力',funNameEN:'Distributed scheduling',funDesc:'统一调度能力，集成多工具的统一调度运维监控能；实现不同的租户提供调度资源隔离。'},
              ],
              scenariosList:[
                  {id:'1',title:'设计即开发，敏捷建模协同交付',content:'使用可视化设计图串接DevOps能力，构建贯穿模型设计、程序开发、流程测试的可视化数据建模工具，实现多人协作迭代完成设计与交付。'},
                  {id:'2',title:'实时离线开发一体化',content:'通过CDC采集与小文件的方式把实时数据生产数据送到kafka ，在整合层完成模型的标准化工作后的实时数据与批量数据的存储存储。提供统一开发界面，进行流批数据的协同处理。\n'},
                  {id:'3',title:'体系化模型管理',content:'贯串模型全生命周期的智能分析管理能力，从模型的创建、发布、评估、变更、共享到模型的下线、还原，实现企业级范围内模型全生命周期管理。'},
                  {id:'4',title:'基于数据目录的按需数据分发共享',content:'通过数据目录提供完善数据服务和共享交换能力，方便租户高效地获取数据信息，打造企业统一的数据共享交换中心。'},
              ],
              solutionList:[
                  {id:'1',title:'助力移动搭建数据中台',content:'按照“能力为根、安全为本、价值为魂”原则，基于企业级大数据平台积极探索集中化数据管理，对内服务精益运营、对外赋能行业发展，实现价值变现和规模运营。',contact:''},
                  {id:'2',title:'助力移动开发新的数据增值变现产品',content:'某省移动通过与银行合作，基于亚信提供的平台聚合双方数据，开发了一款为手机终端客户提供贷款服务的产品——手机贷。挖掘潜在的手机贷用户，评估潜在的手机贷用户的授信额度。',contact:''},
                  {id:'3',title:'助力公路科研所进行数据资产管理',content:'结合“十二五”发展规划及信息化现状， 作为衔接省、市公路“条块”管理的某市公路管理处需要对公路数据全面梳理，整合集中，形成公路数据的资产化管理，提高公路综合管理与服务水平。',contact:''}
              ],
              advantageList:[
                  {id:'1',title:'多源异构的数据快速集成',content:'提供多种类型的数据采集方式。API接口—用于数据交互式及批量数据集，FTP/SFTP接口—批量的历史数据采集等。'},
                  {id:'2',title:'丰富的数据开发能力',content:'数据可视化开发，即开发流程采用直观、可视的方式，从布局设计、数据源配置到组件配置及开发效果全过程均可查看。'},
                  {id:'3',title:'流批一体的数据处理能力',content:'屏蔽底层开发细节，抽象数据操形态，为开发者提供基于图形化的流数据编排服务，简化操作，降低开发难度，提升效率，同时实现统一的元数据管理。'},
                  {id:'4',title:'流批一体的数据处理能力',content:'统一调度能力，集成多工具的统一调度运维监控能；实现不同的租户提供调度资源隔离。平台采用去中心化架构，支持百万级作业调度能力，实现集群高可用和负载均衡能力。'},
                  {id:'5',title:'元数据管理',content:'通过元数据采集汇聚，形成“物理分散、逻辑统一“的统一元数据管理，保障元数据日常运营，并提供元数据查询、血缘及影响分析等对外服务能力。'},
                  {id:'6',title:'数据标准',content:'通过统一的数据标准制定和发布，结合制度约束、系统控制等手段，辅以标准自动推荐、自动纠错等功能，提高企业级大数据平台数据治理水平。'},
              ],
              coreCompetenceList:[
                  {id:'1',title:'数据开发可视化',url:'do/1.mov'},
                  {id:'2',title:'自驱动数据治理',url:'do/2.mov'},
                  {id:'3',title:'数据开放',url:'do/3.mov'},
              ],
              productTrendsList:[
                  {id:'1',title:'ARM支持等功能开发',time:'2020-03-01',version:'V5.2'},
                  {id:'2',title:'V5.2版本发布',time:'2020-06-30',version:'V5.2'},
                  {id:'3',title:'Flink支持、LLAP支持多租户等功能开发',time:'2020-07-01',version:'V5.3'},
                  {id:'4',title:'V5.3版本发布',time:'2020-12-30',version:'V5.3'},
              ],
              experience:{
                  id:'1',title:'选择Data OS，打造大数据中台',url:''
              }
          },
          ak:{
              name:'亚信知识图谱',nameEN:'AISWare KG',desc:'亚信知识图谱（AISWare Knowledge Graph）是一站式知识图谱构建平台，提供本体设计、信息抽取、知识映射、多源融合、推理计算等功能。同时，针对下游应用，提供知识图谱发布、查询、可视化等便捷的接口及服务。',
              sceneName:'功能详情',href: 'http://10.21.10.93:19988/kgweb/unifiedPortalMgr',
              videoUrl:'ak/home.mp4',
              funList:[
                  {id:'1',funName:'知识生产',funNameEN:'Knowledge production',funDesc:'支持管理平台对多场景的图谱模式进行顶层设定，作为自动化抽取的整体框架，进行自动数据清洗、实体识别、关系提取、关系融合、关系权重计算等一系列语义分析能力，快速构建知识图谱。'},
                  {id:'2',funName:'知识融合和推理',funNameEN:'Knowledge fusion and reasoning',funDesc:'提供数据冲突、语义歧义等多种融合方法，以向导方式配置调用相似度计算、模糊主题聚类等AI算法实现知识融合和消歧；通过已有知识内容推理形成新的知识内容，应用于智能问答、智能推荐、风险预警、辅助决策等方面应用。'},
                  {id:'3',funName:'知识存储',funNameEN:'Knowledge storage',funDesc:'考虑海量数据存储、分析、查询能力，因此知识图谱数据采用混合数据库存储，对结构化、非结构化等海量数据进行存储。为高并发、高性能、大规模、平行扩展等需求提供最根本的保障。\n'},
                  {id:'4',funName:'图谱应用',funNameEN:'Graph application',funDesc:'支持面向场景的语义分析模型构建、反馈、标注、重训练流程，不断优化图谱面向具体业务问题的迭代能力。\n'},
              ],
              scenariosList:[
                  {id:'1',title:'媒体资讯分析推荐',content:'基于电影、影评、直播等数据，根据用户偏好进行分析推荐。知识图谱提供了实体与实体之间更深层次、更长范围的关联，增强了推荐算法的挖掘能力，提高了推荐的准确性和多样性。'},
                  {id:'2',title:'智能知识检索',content:'基于知识图谱技术对文档内容进行分析与理解，能直观的查看到文本内容间的关系，帮助提高搜索与推荐结果的准确性。'},
              ],
              solutionList:[
                  {id:'1',title:'数据资产图谱',content:'基于数据图谱提供数据实体关系查询服务，帮助数据中心建设人员构建数据关系探索、建模辅助等应用。依托数据图谱的数据资源间的关系发现、关键链路关系、关系变更、群体变更评估、事件影响扩散等服务，构建数据质量智能稽核。发现或预防数据异常情况后进行提醒或预警。',contact:''},
                  {id:'2',title:'IPTV千人千面智能推荐引擎',content:'以用户体验为中心，精细化运营为导向，依托会员产品体系，基于大小屏联动，通过大数据智能分析与用户画像，实现千人千面智能推荐与智能运营，从而构建IPTV业务的跨屏联动智能运营体系。',contact:''},
                  {id:'3',title:'预离网用户看护知识图谱',content:'基于知识图谱，对预沉默属性的重要影响度进行知识推理、聚类分析，对于不同类别结合专家对预沉默用户特征给出类别的名称和描述，帮助运营人员进行分析预沉默用户的原因。\n',contact:''}
              ],
              advantageList:[
                  {id:'1',title:'知识运营',content:'依托亚信丰富的行业经验，预置市场营销、社交网络、企业关系、智能运维等知识模型，支撑及拓展各专业领域的知识沉淀，助力企业知识运营体系的构建。'},
                  {id:'2',title:'AI赋能',content:'基于AI平台提供的词向量学习、强化学习，图神经网络等AI算法，支撑更高级的智能推理能力。'},
                  {id:'3',title:'多源融合',content:'提供多源异构知识的全面整合能力，包括：集成爬虫、NLP、OCR识别等能力，支持从各类结构化、非结构化视频、图像、文本等异构数据中萃取知识，并通过实体归一、属性融合等手段实现多源数据的知识融合。'},
                  {id:'4',title:'服务开放',content:'为知识图谱应用提供标准化服务接口：通过标准REST API接口为客户提供知识查询及智能问答服务，支持 JDBC 函数式调用提供服务，同时也支持类 SQL 结构化查询语言。支持Gremlin查询操作读取数据。'},
                  {id:'5',title:'灵活高效',content:'高性能存储和计算预置：可支持海量关系的存储和计算，准实时响应节点搜索、多跳查询、最短路径分析等在线查询操作，满足客户在各个场景的定制化需求。'},
                  {id:'6',title:'敏捷易用',content:'便捷的知识图谱一站式构建流水线：面向应用透明，使业务功能搭建和算法平台高度可控。可完全私有化、定制化。提供简单、易用的知识图谱流水线帮助企业快速构建知识资产。\n'},
              ],
              coreCompetenceList:[
                  {id:'1',title:'配置图谱数据来源信息',url:'ak/1.mp4'},
                  {id:'2',title:'可视化创建本体模型',url:'ak/2.mp4'},
                  {id:'3',title:'图谱流水线编排',url:'ak/3.mp4'},
                  {id:'4',title:'图谱查询与可视化浏览',url:'ak/4.mp4'},
              ],
              productTrendsList:[
                  {id:'1',title:'具备一站式知识图谱开发能力，可支撑知识图谱应用试点验证',time:'2020-06-10',version:'V1.0 alpha'},
                  {id:'2',title:'完成亚信图数据数据库集成，初步具备商用推广条件',time:'2020-08-10',version:'V1.0 beta'},
                  {id:'3',title:'集成自然语言处理与AI能力，正式提供商用',time:'2020-09-30',version:'V1.0'},
                  {id:'4',title:'集成实时数据处理与知识校验能力，提升应用的图谱信息的时效与精准度',time:'2020-12-30',version:'V1.1'},
              ],
              experience:{
                  id:'1',title:'选择AISWare KG，推进大数据应用创新',url:''
              }
          },
      },
    videoList: [
      {id: '1', name: '构建BI报表系统', typeId: 'prod1', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '2', name: '构建BI报表系统', typeId: 'prod1', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '3', name: '构建BI报表系统', typeId: 'prod1', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '4', name: '构建BI报表系统', typeId: 'prod1', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '5', name: '构建BI报表系统', typeId: 'prod1', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '6', name: '构建BI报表系统', typeId: 'prod1', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '7', name: '构建BI报表系统', typeId: 'prod1', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '8', name: '构建BI报表系统', typeId: 'prod1', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '9', name: '构建BI报表系统', typeId: 'prod1', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '10', name: '构建BI报表系统', typeId: 'prod1', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '11', name: '构建BI报表系统', typeId: 'prod1', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '12', name: '构建BI报表系统', typeId: 'prod1', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '13', name: '构建BI报表系统', typeId: 'prod2', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '14', name: '构建BI报表系统', typeId: 'prod2', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '15', name: '构建BI报表系统', typeId: 'prod2', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '16', name: '构建BI报表系统', typeId: 'prod3', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '17', name: '构建BI报表系统', typeId: 'prod3', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '18', name: '构建BI报表系统', typeId: 'prod3', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '19', name: '构建BI报表系统', typeId: 'prod3', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '20', name: '构建BI报表系统', typeId: 'prod3', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '21', name: '构建BI报表系统', typeId: 'prod3', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '22', name: '构建BI报表系统', typeId: 'prod4', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '23', name: '构建BI报表系统', typeId: 'prod4', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '24', name: '构建BI报表系统', typeId: 'prod4', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '25', name: '构建BI报表系统', typeId: 'prod4', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '26', name: '构建BI报表系统', typeId: 'prod4', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '27', name: '构建BI报表系统', typeId: 'prod4', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '28', name: '构建BI报表系统', typeId: 'prod4', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '29', name: '构建BI报表系统', typeId: 'prod4', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']},
      {id: '30', name: '构建BI报表系统', typeId: 'prod4', goodnessList: ['拖拽方式构建', '使用模板构建', '快速分享', '邮件推送']}
    ],
    docList: {
      dataInfrastructure: [
        {id: '1', name: '产品路标', fileName: '01.Product Roadmap产品路标_AISWare DataInfrastructure大数据基础平台.pdf',productName: 'Data Infrastructure', updateTime: '2021-01-18'},
        {id: '2', name: '产品研发计划', fileName: '02.Product Plan产品研发计划_AISWare DataInfrastructure大数据基础平台.pdf',productName: 'Data Infrastructure', updateTime: '2021-01-18'},
        {id: '3', name: '产品代码分析报告', fileName: '05.Product Codes Analysis产品代码分析报告.pdf',productName: 'Data Infrastructure', updateTime: '2021-01-18'},
        {id: '4', name: '产品测试方案', fileName: '06.Product Testing Solution产品测试方案_大数据基础平台V5.3.pdf',productName: 'Data Infrastructure', updateTime: '2021-01-18'},
        {id: '5', name: '产品测试报告', fileName: '07.Product Testing产品测试报告_大数据基础平台V5.3.pdf',productName: 'Data Infrastructure', updateTime: '2021-01-18'},
        {id: '6', name: '产品白皮书', fileName: '08.2020年亚信科技大数据基础平台（DP）产品白皮书.pdf',productName: 'Data Infrastructure', updateTime: '2021-01-18'},
        {id: '7', name: '宣传单页', fileName: '09.AISware DataInfrastructure大数据基础平台产品 一纸阐V1.0.pdf',productName: 'Data Infrastructure', updateTime: '2021-01-18'},
        {id: '8', name: '产品介绍', fileName: '10.亚信科技：AISWare DataInfrastructure大数据基础平台产品介绍.pdf',productName: 'Data Infrastructure', updateTime: '2021-01-18'},
        // {id: '9', name: 'About Team产品研发团队介绍_AISWare DataInfrastructure大数据基础平台.pdf', fileName: '11.About Team产品研发团队介绍_AISWare DataInfrastructure大数据基础平台',productName: 'Data Infrastructure', updateTime: '2021-01-18'},
        {id: '10', name: '产品用户手册(前台)', fileName: '12.产品用户手册(前台)_大数据基础平台V5.3.pdf',productName: 'Data Infrastructure', updateTime: '2021-01-18'},
        {id: '11', name: '产品用户手册(后台)', fileName: '13.产品用户手册(后台)_大数据基础平台V5.3.pdf',productName: 'Data Infrastructure', updateTime: '2021-01-18'},
        {id: '12', name: '产品安装部署手册', fileName: '14.产品安装部署手册_大数据基础平台V5.3.pdf',productName: 'Data Infrastructure', updateTime: '2021-01-18'}
      ],
      dataOS: [
        {id: '13', name: '产品测试报告', fileName: '07.产品测试报告.pdf',productName: 'Data OS', updateTime: '2021-01-18'},
        {id: '14', name: '白皮书', fileName: '08.AISWare DataOS-白皮书.pdf',productName: 'Data OS', updateTime: '2021-01-18'},
        {id: '15', name: '一纸阐/宣传单页', fileName: '09.AISware DataOS 一纸阐-V1.2.pdf',productName: 'Data OS', updateTime: '2021-01-18'},
        {id: '41', name: '产品介绍', fileName: 'AISware DataOS产品简介.pdf',productName: 'Data OS', updateTime: '2021-01-18'},
        {id: '16', name: '产品用户手册(前台)', fileName: '13.产品用户手册(前台).pdf',productName: 'Data OS', updateTime: '2021-01-18'},
        {id: '17', name: '产品用户手册(后台)', fileName: '12.产品用户手册(后台).pdf',productName: 'Data OS', updateTime: '2021-01-18'},
        {id: '18', name: '产品安装部署手册', fileName: '14.产品安装部署手册.pdf',productName: 'Data OS', updateTime: '2021-01-18'},
        {id: '42', name: '操作手册', fileName: null, url: 'http://10.5.8.25:39090/#/UserGuide/', productName: 'Data OS', updateTime: '2021-01-18'}
      ],
      dataDiscovery: [
        {id: '19', name: '产品路标', fileName: '01.2020年AISWare DataDiscovery产品路标.pdf',productName: 'Data Discovery', updateTime: '2021-01-18'},
        {id: '20', name: '产品研发计划', fileName: '02.AISWare DataDiscovery产品研发计划.pdf',productName: 'Data Discovery', updateTime: '2021-01-18'},
        {id: '21', name: '产品代码分析报告', fileName: '05.AISWare DataDiscovery产品代码分析报告.pdf',productName: 'Data Discovery', updateTime: '2021-01-18'},
        {id: '22', name: '产品测试方案', fileName: '06.数据探索分析平台测试方案.pdf',productName: 'Data Discovery', updateTime: '2021-01-18'},
        {id: '23', name: '产品测试报告', fileName: '07.数据探索分析平台产品测试报告.pdf',productName: 'Data Discovery', updateTime: '2021-01-18'},
        {id: '24', name: '产品白皮书', fileName: '08.AISWare DataDiscovery 亚信科技数据探索分析平台(白皮书)v1.1.pdf',productName: 'Data Discovery', updateTime: '2021-01-18'},
        {id: '25', name: '宣传单页', fileName: '09.AISWare DataDiscovery一纸阐_V2.3.pdf',productName: 'Data Discovery', updateTime: '2021-01-18'},
        {id: '26', name: '产品介绍', fileName: '10.AISWare DataDisocvery产品总体介绍.pdf',productName: 'Data Discovery', updateTime: '2021-01-18'},
        {id: '27', name: '产品用户手册(前台)', fileName: '13.数据探索分析平台产品用户手册(前台).pdf',productName: 'Data Discovery', updateTime: '2021-01-18'},
        {id: '28', name: '产品用户手册(后台)', fileName: '12.数据探索分析平台产品用户手册(后台).pdf',productName: 'Data Discovery', updateTime: '2021-01-18'},
        {id: '29', name: '产品安装部署手册', fileName: '14.数据探索分析平台产品安装部署手册.pdf',productName: 'Data Discovery', updateTime: '2021-01-18'},
      ],
      dataKG: [
        {id: '30', name: '产品路标', fileName: '01.Product Roadmap产品路标-知识图谱平台.pdf',productName: 'AISWare KG', updateTime: '2021-01-18'},
        {id: '31', name: '产品研发计划', fileName: '02.Product Plan产品研发计划-AISWare KG.pdf',productName: 'AISWare KG', updateTime: '2021-01-18'},
        {id: '32', name: '产品代码分析报告', fileName: '05.Product Codes Analysis产品代码分析报告_AISWare Knowledge Graph 知识图谱.pdf',productName: 'AISWare KG', updateTime: '2021-01-18'},
        {id: '33', name: '产品测试方案', fileName: '06.知识图谱产品测试方案v1.0.pdf',productName: 'AISWare KG', updateTime: '2021-01-18'},
        {id: '34', name: '产品测试报告', fileName: '07.Product Testing产品测试报告v1.0.pdf',productName: 'AISWare KG', updateTime: '2021-01-18'},
        {id: '35', name: '产品白皮书', fileName: '08.AISWare Knowledge Graph 亚信科技知识图谱产品 产品白皮书.pdf',productName: 'AISWare KG', updateTime: '2021-01-18'},
        {id: '36', name: '宣传单页', fileName: '09.AISWare Knowledge Graph 知识图谱一纸阐V1.7.pdf',productName: 'AISWare KG', updateTime: '2021-01-18'},
        {id: '37', name: '产品介绍', fileName: '10.AISWare Knowledge Graph 知识图谱产品介绍V1.0.pdf',productName: 'AISWare KG', updateTime: '2021-01-18'},
        {id: '38', name: '产品用户手册(前台)', fileName: '13.产品用户手册(前台)_知识图谱产品.pdf',productName: 'AISWare KG', updateTime: '2021-01-18'},
        {id: '39', name: '产品用户手册(后台)', fileName: '12.产品用户手册(后台)_知识图谱产品.pdf',productName: 'AISWare KG', updateTime: '2021-01-18'},
        {id: '40', name: '产品安装部署手册', fileName: '14.产品安装部署手册_知识图谱产品.pdf',productName: 'AISWare KG', updateTime: '2021-01-18'},
      ]
    },
    docInfo: {},
    appData: {
      1: {
        id: '1', appCode: "gov", title: '政府与公共服务解决方案', appName: "重庆燃气集团大数据平台", appDesc: `基于物联网、大数据、云计算、信息系统等“互联网+”技术，配合最新服务理念，以达到实现燃气用量数据分析、燃气管网安全检测、燃气工程监督管理、燃气应急智慧调度等目标，最终实现“一键、自动、信息、预警、安全、远程、体验”等智慧应用。
        助力行业信息化建设，随着信息化应用水平提高，可降低成本、提高利润、节省人力、最大效能，从而提升企业核心竞争能力。`,
        appComment: '以hadoop架构作为重庆燃气大数据平台的基础架构，并在此基础上建设重庆燃气大数据平台。',
        url: '/app/1',
        coreValue: [
          { coreId: '1', coreTitle: '自动化计费、催缴费能力', coreDesc: '依据移动物联网/大数据+燃气大数据+人群标签能力+信息发布能力+平台数据接入分析能力。' },
          { coreId: '2', coreTitle: '提升用气行为分析能力', coreDesc: '通过物联网智能抄表等数据的升级接入，实现燃气设备的参数接入，开关量输入和输出，结合移动大数据位置信息、人流信息等，实现用气行为分析。' },
          { coreId: '3', coreTitle: '燃气数据共享、应用开放', coreDesc: '依据大数据平台数据能力+开发能力，针对燃气客户业务服务、查询服务、效能评估、表单输出等提供能力应用。' },
        ],
        relateProduct: [
          { prodId: 'dataos', prodTitle: 'Data OS', prodUrl: 'http://10.19.83.121/frame/personal-home', prodDesc: '围绕数据资产开发、治理、运营、运维等全方位工作提供端到端的全生命周期、全景式、全流程操作能力。',videoUrl:'/video/do/home.mp4' },
          { prodId: 'di', prodTitle: 'Data Infrastructure', prodUrl: 'http://10.1.236.91:1001/#/home/signin', prodDesc: '为企业提供大数据的存储、计算及分析能力，提供管理、监控、优化一体化的大数据基础平台。' ,videoUrl:'/video/di/home.mp4'},
          { prodId: 'dts', prodTitle: 'Data Discovery', prodUrl: 'http://10.1.235.184:9060/dts/sso/union-entry', prodDesc: '提供自助式、可视化、可分析、可协作的数据探索与分析平台，让人人均可成为数据分析专家或工作者。' ,videoUrl:'/video/dts/home.mp4'},
        ],
        useSummary: [
          {count:'高效协作', unit: '',desc: '精准数据治理',},
          {count:'智慧服务', unit: '',desc: '智慧民生服务新体系',},
          {count:'科学决策', unit: '',desc: '提高营销政策调控的科学性',},
          {count:'开放创新', unit: '',desc: '燃气数据开放',},
        ],
      },
      2: {
        id: '2', appCode: "telecom", title: '电信行业解决方案', appName: "集中化多租户大数据平台", appDesc: `集中化多租户大数据平台方案以“集中化”为建设引领，顺应技术发展，构建丰富服务组件、多集群统一管控、平台运营高效、数据安全可控的集中化多租户大数据平台，实现平台能力、数据服务能力、共性工具能力、系统运维能力的统一建设、统一管控，面向内外部租户提供全面敏捷的储算、工具、数据等大数据服务能力。`,
        url: '/app/2',
        appComment: '以“集中化”为建设引领，顺应技术发展，构建丰富服务组件、多集群统一管控、平台运营高效、数据安全可控的集中化多租户大数据平台。',
        coreValue: [
          { coreId: '1', coreTitle: '一站式大数据平台', coreDesc: '提供可视化、自助分析、机器学习等数据开发工具，打造一站式开发平台，提升数据开发效率.' },
          { coreId: '2', coreTitle: '提升资源利用率', coreDesc: '面向自有平台、组件和第三方平台、组件提供统一的一体化管控平台，实现资源按需申请，按需分配，提升资源利用率。' },
          { coreId: '3', coreTitle: '全景式数据中台生态', coreDesc: '面向数据工程师、开发者、运营管理、安全管理者提供端到端化/自动化/可集成的数据全生命周期的全景式数据中台能力生态。' },
        ],
        relateProduct: [
          { prodId: 'dataos', prodTitle: 'Data OS', prodUrl: 'http://10.19.83.121/frame/personal-home', prodDesc: '围绕数据资产开发、治理、运营、运维等全方位工作提供端到端的全生命周期、全景式、全流程操作能力。',videoUrl:'/video/do/home.mp4' },
          { prodId: 'di', prodTitle: 'Data Infrastructure', prodUrl: 'http://10.1.236.91:1001/#/home/signin', prodDesc: '为企业提供大数据的存储、计算及分析能力，提供管理、监控、优化一体化的大数据基础平台。' ,videoUrl:'/video/di/home.mp4'},
          { prodId: 'dts', prodTitle: 'Data Discovery', prodUrl: 'http://10.1.235.184:9060/dts/sso/union-entry', prodDesc: '提供自助式、可视化、可分析、可协作的数据探索与分析平台，让人人均可成为数据分析专家或工作者。' ,videoUrl:'/video/dts/home.mp4'},
        ],
        useSummary: [
          {count:'1.6万台', unit: '',desc: '集群规模业内最大',},
          {count:'80PB', unit: '',desc: '数据资产规模业务最大',},
          {count:'开放生态', unit: '',desc: '大数据应用百花齐放',},
          {count:'全网最佳实践', unit: '',desc: '大数据应用开发场景全覆盖',},
        ],
      },
      3: {
        id: '3', appCode: "telecom", title: '电信行业解决方案', appName: "移动总部OSS数据共享平台", appDesc: `移动总部OSS数据共享平台方案以大数据平台为基础，通过全面的数据治理和数据管控能力，构建面向集团网络部的业务数据管理、网管业务数据支撑、业务专题分析及网络通用数据服务和数据供给能力，通过数据订阅和数据共享服务支撑上层各项网管应用和专题应用。`,
        url: '/app/3',
        appComment: '以大数据平台为基础，通过全面的数据治理和数据管控能力，构建面向集团网络部的业务数据管理、网管业务数据支撑、业务专题分析及网络通用数据服务和数据供给能力',
        coreValue: [
          { coreId: '1', coreTitle: '提升数据标准化水平', coreDesc: '实现对O域数据全面的数据治理和数据管控，提升数据标准化水平。' },
          { coreId: '2', coreTitle: '提升开发支撑效率', coreDesc: '通过标准化的数据开放，快速支持前端业务需求，减少重复开发，提升支撑效率。' },
          { coreId: '3', coreTitle: '保障企业数据资产安全', coreDesc: '通过对从数据接入到数据开放、数据消亡全生命周期的安全管控，保障企业数据资产的安全。' },
        ],
        relateProduct: [
          { prodId: 'dataos', prodTitle: 'Data OS', prodUrl: 'http://10.19.83.121/frame/personal-home', prodDesc: '围绕数据资产开发、治理、运营、运维等全方位工作提供端到端的全生命周期、全景式、全流程操作能力。',videoUrl:'/video/do/home.mp4' },
          { prodId: 'di', prodTitle: 'Data Infrastructure', prodUrl: 'http://10.1.236.91:1001/#/home/signin', prodDesc: '为企业提供大数据的存储、计算及分析能力，提供管理、监控、优化一体化的大数据基础平台。' ,videoUrl:'/video/di/home.mp4'},
        ],
        useSummary: [
          {count:'O域数据的汇聚与融合', unit: '',desc: 'O域数据的汇聚与融合',},
        ],
      },
    },
  },
  mutations: {
    updateDocInfo (state, data) {
      const all = [...state.docList.dataInfrastructure, ...state.docList.dataOS, ...state.docList.dataDiscovery, ...state.docList.dataKG];
      const docs = all.filter(item => item.id === data.res.id);
      state.docInfo = docs[0] || {};
    },
    rightMenu(state,data) {
      state.rightMenu = data.res;
      //给几个立即体验按钮增加权限
      const prodList = state.prodList;
      prodList.forEach(item =>{
        const ptemp = data.res.filter(rItem => rItem.resourceCode === item.productId);
        if(ptemp.length>0){
          item.tyButton=true;
        }        
      })
      state.prodList = [...prodList];
      //
      const productData = state.productData;
      for(var key in productData){ 
        const ptemp = data.res.filter(rItem => rItem.resourceCode === key);
        if(ptemp.length>0){
          productData[key].tyButton=true;
        }
      }
    state.productData = {...productData};
    //
    const appData = state.appData;
    for(var key in appData){ 
      const relateProduct = appData[key].relateProduct;
      for(var rItemKey in relateProduct){
        const ptemp = data.res.filter(rItem => rItem.resourceCode === relateProduct[rItemKey].prodId);
        if(ptemp.length>0){
          appData[key].relateProduct[rItemKey].tyButton=true;
        }
      }
    }
    state.appData = {...appData};
    }
  },
  actions: {
    queryDocById ({commit, dispatch}, params) {
      commit({
        type: 'updateDocInfo',
        res: params
      })
    },
    setRightMenu ({commit, dispatch}, menuList) {
      commit({
        type: 'rightMenu',
        res: menuList
      })
    }
  },
  modules: {
  },
  getters: {
    product: state => {
      return {
        list: state.prodList,
        movieList: state.newsMovie
      }
    },
      productDataGetter: state =>{
          return{
              productData:state.productData,
          }

      },
    videoGetter: state => {
      return {
        list: state.videoList
      }
    },
    docGetter: state => {
      return {
        list: state.docList
      }
    },
    docInfoGetter: state => {
      return {
        docInfo: state.docInfo
      }
    },
    appGetter: state => {
      return {
        appData: state.appData
      }
    },
    menuGetter: state => {
      const allProv=state.prodList;
      const rightMenu=state.rightMenu;
      let resultMenu = [];
      for (let p in allProv){
         for(let m in rightMenu){
            if(rightMenu[m].resourceCode === allProv[p].productId){
              resultMenu.push(allProv[p]);
              break;
            }
         }
      }
      return {
        list: resultMenu
      }
    },
    noRightMess: state =>{
      return {
        message: state.noRightMess
      }
    }
  }
})
