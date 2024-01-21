# Fake-News-Project
Implementing a couple of models for classifying news as fakenews or not, this project uses three datasets and combines them to build a final dataset, that dataset is then used to build a neural network.

Dataset 1 - The dataset contains two types of articles: fake and real News. This dataset was collected from real world
sources; the truthful articles were obtained by crawling articles from Reuters.com (News website). As for the fake news
articles, they were collected from different sources. The fake news articles were collected from unreliable websites that
were flagged by Politifact (a fact-checking organization in the USA) and Wikipedia. The dataset contains different types of
articles on different topics, however, the majority of articles focus on political and World news topics. The dataset consists
of two CSV files. The first file named “True.csv” contains more than 12,600 articles from reuter.com. The second file named
“Fake.csv” contains more than 12,600 articles from different fake news outlet resources. Each article contains the following
information: article title, text, type and the date the article was published on.

Dataset 2- (WELFake) is a dataset of 72,134 news articles with 35,028 real and 37,106 fake news. For this, the authors
merged four popular news datasets (i.e. Kaggle, McIntire, Reuters, BuzzFeed Political) to prevent over-fitting of classifiers
and to provide more text data for better ML training. Dataset contains four columns: Serial number (starting from 0); Title
(about the text news heading); Text (about the news content); and Label (0 = fake and 1 = real). There are 78098 data
entries in CSV file out of which only 72134 entries are accessed as per the data frame.

Dataset 3 - Dataset 3 is a dataset of 6256 titles and 6060 texts. We eliminated all the repeated data, rows, and columns
and kept only the text and titles
