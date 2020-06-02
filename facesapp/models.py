import random

def get_image_set(set_num):
    image_sets = [['7_male.jpg', '84_male.jpg', '14_male.jpg', '17_female.jpg'],
                  ['57_female.jpg', '8_female.jpg', '26_male_2.jpg', '33_female.jpg'],
                  ['35_female.jpg', '19_male.jpg', '19_female.jpg', '53_male.jpg'],
                  ['64_male.jpg', '21_male.jpg', '35_female.jpg', '35_male_2.jpg'],
                  ['12_female.jpg', '73_female.jpg', '61_male.jpg', '23_female.jpg'],
                  ['68_male_2.jpg', '7_male_2.jpg', '49_female.jpg', '27_male.jpg'],
                  ['35_female_2.jpg', '21_male_2.jpg', '53_female.jpg', '87_female.jpg'],
                  ['8_male.jpg', '66_female.jpg', '18_male.jpg', '28_female.jpg']]

    selected = image_sets[set_num % len(image_sets)]
    random.shuffle(selected)
    return selected
