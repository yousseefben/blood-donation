import React, {useState, useMemo} from 'react';
import {View, Image} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import Button from '_atoms/Button/Button';
import Box from '_atoms/Box/Box';
import Text from '_atoms/Text/Text';
import BecomeDonorCard from '_molecules/BecomeDonorCard';
import {BloodDonorRequestCardProps} from '_molecules/BloodDonorRequestCard';
import CardSection from '_molecules/CardSection';
import DonationNeedSection from '_organisms/DonationNeedSection';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';
type Params = {userId?: string};
// type ScreenProps = { language: string };
// NavigationStackScreenProps<Params, ScreenProps>
import CardHomeSection from '_organisms/CardHomeSection';
import Container from '_atoms/Container/Container';
import QuestionComponent from '_organisms/Questionaire/QuestionComponent';
import {setIn} from 'formik';

type QuestionaireProps = {
  image: string;
  description: string;
  rejectDescription: string;
};
const questionaires: QuestionaireProps[] = [
  {
    image: require('../../assets/questionnaire/cough.png'),
    description: 'description cough',
    rejectDescription: 'reject description cough',
  },
  {
    image: require('../../assets/questionnaire/cough.png'),
    description: 'description virus',
    rejectDescription: 'reject description virus',
  },
];
const QuestionaireScreen = ({navigation}: StackNavigationProp<Params>) => {
  const [isSuccess, setSuccess] = useState(false);
  const [isRejected, setRejected] = useState(false);
  const [index, setIndex] = useState(0);

  const qst: QuestionaireProps = useMemo(() => questionaires[index] || {}, [
    index,
  ]);
  const {image, description, rejectDescription} = qst;
  const handleSuccess = () => {
    if (index + 1 === questionaires.length) setSuccess(true);
    else setIndex(index + 1);
  };
  return (
    <Container notScroll title={!isSuccess && !isRejected && 'rr'}>
      <QuestionComponent
        description={description}
        image={image}
        isRejected={isRejected}
        rejectedDescription={rejectDescription}
        isSuccess={isSuccess}
        onSuccess={handleSuccess}
        onFailure={() => setRejected(true)}
      />
    </Container>
  );
};

export default QuestionaireScreen;
