import React from 'react';
import { render } from 'react-dom'
import MyComponent from '../../src'

const App = () => <MyComponent
                        displayData={[
                            {
                             title: 'レベルに見合わない 教材の選択',
                             description: '適切な教材は「自力での正解率が50%〜90%」です。 レベルに合わない教材を選択すると、正解率が低下します。',
                             imagePath: 'https://i.imgur.com/1J8Q1Zr.png'
                            },
                            {
                                title: '膨大な教材と資料の 管理・可視化の不徹底',
                                description: 'せっかく塾から提供される膨大な資料も、分析して次の学習に活かさなくては宝の持ち腐れです。',
                                imagePath: 'https://i.imgur.com/1J8Q1Zr.png'
                            },
                            {
                                title: '充実した家庭学習の 環境・時間の確保',
                                description: '塾は、「きっかけをつかむ場」であって、それを自宅学習で定着させることこそが大事です。 塾に通っていても、自宅学習が不十分なら、成績は上がりません。',
                                imagePath: 'https://i.imgur.com/1J8Q1Zr.png'
                            }
                        ]}
                        titleAs='h2'
                        style={{maxWidth:'1200px', margin:'0 auto'}}
                        // baseColor='#FF0000'
                        // titleFontSizes={[16,18,20,22,24]}
                        // imageHeights={[100,200,300,400,500]}
                    >
                        <h2>hello</h2>
                    </MyComponent>;
render(<App />, document.getElementById('root'));